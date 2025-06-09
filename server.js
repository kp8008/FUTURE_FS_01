const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

app.post('/send', (req, res) => {
    const { name, email, contact, message } = req.body;
    console.log('Contact Form Data:', { name, email, contact, message });
    res.json({ message: 'Your message was sent successfully!' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
