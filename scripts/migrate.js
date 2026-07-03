'use strict';

require('dotenv').config();
const mysql = require('mysql2/promise');
const fs = require('fs');
const path = require('path');

async function migrate() {
  const conn = await mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT, 10) || 3306,
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    multipleStatements: true,
  });

  console.log('🔄 Running migration...');
  const sql = fs.readFileSync(path.join(__dirname, '../sql/schema.sql'), 'utf8');
  await conn.query(sql);
  await conn.end();
  console.log('✅ Migration complete — database and tables are ready.');
}

migrate().catch(err => {
  console.error('❌ Migration failed:', err.message);
  process.exit(1);
});
