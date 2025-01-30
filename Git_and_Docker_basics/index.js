const express = require('express');
const app = express();
const PORT = 4000;
app.get('/', (req, res) => res.send('I am alive!'));
app.listen(PORT, () => console.log(`App running on port ${PORT}`));
