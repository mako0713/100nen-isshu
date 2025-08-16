// Vercelのサーバーレス関数形式に書き換えたserver.js
const fetch = require('node-fetch');

module.exports = async (req, res) => {
    // POSTリクエスト以外は受け付けないようにする
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const { prompt } = req.body;
    const apiKey = process.env.GEMINI_API_KEY;
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;

    try {
        let chatHistory = [{ role: "user", parts: [{ text: prompt }] }];
        const payload = { contents: chatHistory };

        const apiResponse = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
        });

        if (!apiResponse.ok) {
            const errorBody = await apiResponse.text();
            console.error("Google API Error:", errorBody);
            throw new Error(`API request failed with status ${apiResponse.status}`);
        }

        const result = await apiResponse.json();
        
        // 成功した結果をブラウザに送り返す
        res.status(200).json(result);

    } catch (error) {
        console.error("Server-side error:", error);
        res.status(500).json({ error: 'AI comment generation failed on the server' });
    }
};