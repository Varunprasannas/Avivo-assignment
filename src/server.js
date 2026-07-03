'use strict';

require('dotenv').config();
const app = require('./app');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`\n✅ Server running on http://localhost:${PORT}`);
  console.log(`   GET http://localhost:${PORT}/users`);
  console.log(`   GET http://localhost:${PORT}/health\n`);
});
