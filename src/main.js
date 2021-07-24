const app = require('./app');

const port = process.env.PORT || 3008;
const host = process.env.HOST || 'localhost';

app.listen(port, () => console.log(`server is listening on http://${host}:${port}`));