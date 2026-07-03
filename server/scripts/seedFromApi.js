'use strict';

require('dotenv').config();
const mysql = require('mysql2/promise');

const API_URL = 'https://dummyjson.com/users?limit=0';

async function seedFromApi() {
  console.log('📡 Fetching users from dummyjson.com...');
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error(`API responded with status ${res.status}`);
  const { users } = await res.json();
  console.log(`   Received ${users.length} users`);

  const conn = await mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT, 10) || 3306,
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'avivo_users',
  });

  console.log('🔄 Clearing existing data...');
  await conn.query('SET FOREIGN_KEY_CHECKS = 0');
  await conn.query('TRUNCATE TABLE user_company');
  await conn.query('TRUNCATE TABLE user_bank');
  await conn.query('TRUNCATE TABLE user_addresses');
  await conn.query('TRUNCATE TABLE users');
  await conn.query('SET FOREIGN_KEY_CHECKS = 1');

  console.log('🌱 Inserting users...');
  for (const u of users) {
    await conn.execute(
      `INSERT INTO users
         (id, first_name, last_name, maiden_name, age, gender, email, phone, username,
          birth_date, image, blood_group, height, weight, eye_color, hair_color, hair_type,
          ip_address, mac_address, university, ein, ssn, user_agent, role)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        u.id, u.firstName, u.lastName, u.maidenName || null, u.age, u.gender,
        u.email, u.phone, u.username, u.birthDate, u.image, u.bloodGroup,
        u.height, u.weight, u.eyeColor, u.hair?.color || null, u.hair?.type || null,
        u.ip, u.macAddress, u.university, u.ein, u.ssn, u.userAgent, u.role || 'user',
      ]
    );

    const addr = u.address || {};
    await conn.execute(
      `INSERT INTO user_addresses (user_id, street, city, state, state_code, postal_code, lat, lng, country)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        u.id, addr.address || null, addr.city || null, addr.state || null,
        addr.stateCode || null, addr.postalCode || null,
        addr.coordinates?.lat ?? null, addr.coordinates?.lng ?? null,
        addr.country || null,
      ]
    );

    const bank = u.bank || {};
    await conn.execute(
      `INSERT INTO user_bank (user_id, card_expire, card_number, card_type, currency, iban)
       VALUES (?, ?, ?, ?, ?, ?)`,
      [u.id, bank.cardExpire || null, bank.cardNumber || null, bank.cardType || null, bank.currency || null, bank.iban || null]
    );

    const co = u.company || {};
    const coAddr = co.address || {};
    await conn.execute(
      `INSERT INTO user_company (user_id, department, name, title, street, city, state, state_code, postal_code, lat, lng, country)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        u.id, co.department || null, co.name || null, co.title || null,
        coAddr.address || null, coAddr.city || null, coAddr.state || null,
        coAddr.stateCode || null, coAddr.postalCode || null,
        coAddr.coordinates?.lat ?? null, coAddr.coordinates?.lng ?? null,
        coAddr.country || null,
      ]
    );
  }

  await conn.end();
  console.log(`✅ Seeded ${users.length} live users from dummyjson.com`);
}

seedFromApi().catch(err => {
  console.error('❌ seedFromApi failed:', err.message);
  process.exit(1);
});
