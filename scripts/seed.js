'use strict';

require('dotenv').config();
const mysql = require('mysql2/promise');
const fs = require('fs');
const path = require('path');

async function seed() {
  const conn = await mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT, 10) || 3306,
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'avivo_users',
    multipleStatements: true,
  });

  console.log('🌱 Seeding database...');
  const sql = fs.readFileSync(path.join(__dirname, '../sql/seed.sql'), 'utf8');
  await conn.query(sql);
  await conn.end();
  console.log('✅ Seed complete — 20 users inserted.');
}

seed().catch(err => {
  console.error('❌ Seed failed:', err.message);
  process.exit(1);
});
