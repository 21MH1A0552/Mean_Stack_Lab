const express = require('express');
const app = express();
const route=require('./Routes/routes')
app.use('/', route);
const port = 3000;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
});
