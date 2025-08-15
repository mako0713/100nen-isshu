try {
    console.log("1. スクリプト開始");
    const express = require('express');
    console.log("2. expressの読み込み成功");
    const fetch = require('node-fetch');
    console.log("3. node-fetchの読み込み成功");
    require('dotenv').config();
    console.log("4. dotenvの読み込み成功");

    const app = express();
    const port = 3000;

    console.log("5. expressアプリの初期化成功");

    // JSON形式のリクエストを扱えるようにする設定
    app.use(express.json());
    // HTMLやCSS、JSファイルを配信するための設定
    app.use(express.static('.')); 

    // AIコメントを生成するための窓口（エンドポイント）
    app.post('/generate-comment', async (req, res) => {
        const prompt = req.body.prompt;
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
                throw new Error(`API request failed with status ${apiResponse.status}`);
            }

            const result = await apiResponse.json();
            res.json(result); // AIからの返信をブラウザに送り返す

        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'AI comment generation failed' });
        }
    });

    app.listen(port, () => {
        console.log(`サーバーが http://localhost:${port} で起動しました`);
    });

} catch (error) {
    console.error("！！！致命的なエラーが発生しました！！！");
    console.error(error);
}