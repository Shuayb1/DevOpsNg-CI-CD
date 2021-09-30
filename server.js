const express = require('express');
const app = express();
app.get('/', (req, res) => {
    console.log('hello nigga')
});

port = 3000
app.listen(port, () => {
    console.log(`simple node api runs at http://localhost:${port}`)
})