/** Start server. */

const app = require('./app');

app.listen(8000, () => {
  console.log(`Server starting on port 8000!`);
});
