const express = require('express');
const cors = require('cors');

const app = express();
const port = 8000;

app.use(cors());
app.use(express.static(`${__dirname}/../client/dist`));
app.listen(port, () => console.log(`Now listening on ${port}`));

// Server Routing below
