










// app.js
const express = require('express');
const app = express();
const port = 3000;

// Serve static files (like CSS, images, etc.)
app.use(express.static('public'));

// Homepage route
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Colorful Node App</title>
        <style>
          body {
            background: linear-gradient(135deg, #ff9a9e, #fad0c4);
            font-family: 'Poppins', sans-serif;
            color: #333;
            text-align: center;
            margin: 0;
            padding: 0;
          }
          h1 {
            color: white;
            font-size: 3em;
            margin-top: 20%;
            text-shadow: 2px 2px 8px rgba(0,0,0,0.3);
          }
          p {
            font-size: 1.2em;
            color: #fff;
          }
          button {
            margin-top: 20px;
            padding: 12px 24px;
            font-size: 1em;
            background-color: #ff6f61;
            border: none;
            border-radius: 10px;
            color: white;
            cursor: pointer;
            transition: 0.3s;
          }
          button:hover {
            background-color: #ff3b2e;
            transform: scale(1.1);
          }
        </style>
      </head>
      <body>
        <h1>🌈 Welcome to My Colorful Node.js App!</h1>
        <p>Express + Colors = Happiness 😄</p>
        <button onclick="alert('You clicked the colorful button!')">Click Me!</button>
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`🎨 Colorful app running at http://localhost:${port}`);
});
