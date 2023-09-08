const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.post('/api', (req, res) => {
    const data = req.body.data;

    const is_success = true; 
    const user_id = "Dhruv_Aggarwal_19012001";
    const email = "da5438@srmist.edu.in";
    const roll_number = "RA2011030030046";

    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item) && item.length === 1);

    const highest_alphabet = alphabets.reduce((max, char) => {
        char = char.toUpperCase();
        return max < char ? char : max;
    }, '');

    const response = {
        "is_success": is_success,
        "user_id": user_id,
        "email": email,
        "roll_number": roll_number,
        "numbers": numbers,
        "alphabets": alphabets,
        "highest_alphabet": highest_alphabet !== '' ? [highest_alphabet] : []
    };

    res.json(response);
});

app.get('/api', (req, res) => {
    const operation_code = "1"; 
    res.json({ operation_code });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});