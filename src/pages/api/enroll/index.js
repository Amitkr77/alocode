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

    // Access body correctly (assumes JSON or urlencoded form)
    const formData = req.body || {}; // Fallback to empty object

    // Basic validation (add more as needed)
    if (!formData.name || !formData.email) {
        return res.status(400).json({ message: 'Missing required fields: name, email' });
    }

    // Prepare the data to be written in the Google Sheet
    const values = [
        [
            formData.name,
            formData.phone || '', // Defaults for optional fields
            formData.email,
            formData.course || '',
            formData.start_date || '',
            formData.goals || '',
        ],
    ];

    // Append the data to the sheet
    try {
        const response = await sheets.spreadsheets.values.append({
            spreadsheetId: SHEET_ID,
            range: 'Sheet1!A:F',
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