const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('../dist'));
app.use(express.json());


app.listen(PORT, () => {
    console.log(`Connected to port: ${PORT}`);
});