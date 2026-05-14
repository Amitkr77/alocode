import { google } from "googleapis";

const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];
const SHEET_ID = process.env.GOOGLE_SHEET_ID;

// ⚠️ Safety check
if (!process.env.GOOGLE_PRIVATE_KEY) {
  throw new Error("GOOGLE_PRIVATE_KEY is missing from .env.local");
}
if (!process.env.GOOGLE_CLIENT_EMAIL) {
  throw new Error("GOOGLE_CLIENT_EMAIL is missing from .env.local");
}
if (!process.env.GOOGLE_SHEET_ID) {
  throw new Error("GOOGLE_SHEET_ID is missing from .env.local");
}

const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
  },
  scopes: SCOPES,
});

const sheets = google.sheets({ version: "v4", auth });

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { action, ...data } = req.body || {};

  // ── STEP 1: Append new row with personal details only ──────────────────────
  if (action === "save_details") {
    if (!data.name || !data.email) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const values = [
      [
        new Date().toLocaleString("en-IN"), // A - Timestamp
        data.name, // B - Name
        data.phone || "", // C - Phone
        data.email, // D - Email
        data.course || "", // E - Course
        data.startDate || "", // F - Start Date
        data.goals || "", // G - Goals
        "", // H - Pay Mode (empty for now)
        "", // I - Paid (empty for now)
        "", // J - Amount (empty for now)
      ],
    ];

    try {
      const response = await sheets.spreadsheets.values.append({
        spreadsheetId: SHEET_ID,
        range: "Enroll!A:J",
        valueInputOption: "RAW",
        includeValuesInResponse: false,
        insertDataOption: "INSERT_ROWS",
        resource: { values },
      });

      // Extract the row number from the updated range e.g. "Enroll!A5:J5" → 5
      const updatedRange = response.data.updates?.updatedRange || "";
      const match = updatedRange.match(/:.*?(\d+)$/);
      const rowNumber = match ? parseInt(match[1]) : null;

      return res.status(200).json({ message: "Details saved", rowNumber });
    } catch (error) {
      console.error("❌ Error saving details:", error);
      return res.status(500).json({ message: "Failed to save details" });
    }
  }

  // ── STEP 2: Update payment columns on the same row ─────────────────────────
  if (action === "update_payment") {
    const { rowNumber, payMode, paid, amount } = data;

    if (!rowNumber) {
      return res.status(400).json({ message: "Missing rowNumber" });
    }

    // H, I, J of that specific row
    const range = `Enroll!H${rowNumber}:J${rowNumber}`;

    try {
      await sheets.spreadsheets.values.update({
        spreadsheetId: SHEET_ID,
        range,
        valueInputOption: "RAW",
        resource: {
          values: [
            [
              payMode || "", // H - Pay Mode
              paid ? "Yes" : "No", // I - Paid
              amount || "Not paid", // J - Amount
            ],
          ],
        },
      });

      return res.status(200).json({ message: "Payment updated" });
    } catch (error) {
      console.error("❌ Error updating payment:", error);
      return res.status(500).json({ message: "Failed to update payment" });
    }
  }

  return res.status(400).json({ message: "Invalid action" });
}
