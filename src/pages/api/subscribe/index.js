import { google } from 'googleapis';

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];
const SHEET_ID = process.env.GOOGLE_SHEET_ID;

const auth = new google.auth.GoogleAuth({
    credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    },
    scopes: SCOPES,
});

const sheets = google.sheets({ version: 'v4', auth });

export default async function handler(req, res) {
    // Method check
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    // Parse body as JSON (assumes client sends JSON)
    const { email } = req.body;

    // Basic validation
    if (!email || typeof email !== 'string' || !email.includes('@') || !email.includes('.')) {
        return res.status(400).json({ message: 'Missing or invalid email' });
    }

    // Prepare the data to be written in the Google Sheet
    // Optional: Add timestamp as first column (uncomment below)
    // const values = [[new Date().toISOString(), email]];
    // Use range: 'subscribe!A:B' if adding timestamp
    const values = [[email]];

    // Append the data to the sheet
    try {
        const response = await sheets.spreadsheets.values.append({
            spreadsheetId: SHEET_ID,
            range: 'subscribe!A:A', // Updated to target the "subscribe" sheet
            valueInputOption: 'RAW',
            resource: {
                values,
            },
        });

        console.log('✅ Data saved to Google Sheet:', response.data); // Log for debugging
        return res.status(200).json({
            message: 'Data saved successfully',
            row: response.data.updates?.updatedRange // Optional: Return appended range
        });

    } catch (error) {
        console.error('❌ Error saving to Google Sheet:', error);
        return res.status(500).json({ message: 'Failed to save data' }); // Generic error
    }
}