'use strict';

const { pool } = require('../config/db');

const JOIN_QUERY = `
  SELECT
    u.id,
    u.first_name,   u.last_name,    u.maiden_name,
    u.age,          u.gender,       u.email,
    u.phone,        u.username,     u.birth_date,
    u.image,        u.blood_group,  u.height,
    u.weight,       u.eye_color,    u.hair_color,
    u.hair_type,    u.ip_address,   u.mac_address,
    u.university,   u.ein,          u.ssn,
    u.user_agent,   u.role,

    a.street         AS addr_street,
    a.city           AS addr_city,
    a.state          AS addr_state,
    a.state_code     AS addr_state_code,
    a.postal_code    AS addr_postal_code,
    a.lat            AS addr_lat,
    a.lng            AS addr_lng,
    a.country        AS addr_country,

    b.card_expire    AS bank_card_expire,
    b.card_number    AS bank_card_number,
    b.card_type      AS bank_card_type,
    b.currency       AS bank_currency,
    b.iban           AS bank_iban,

    c.department     AS company_department,
    c.name           AS company_name,
    c.title          AS company_title,
    c.street         AS company_street,
    c.city           AS company_city,
    c.state          AS company_state,
    c.state_code     AS company_state_code,
    c.postal_code    AS company_postal_code,
    c.lat            AS company_lat,
    c.lng            AS company_lng,
    c.country        AS company_country

  FROM users u
  LEFT JOIN user_addresses  a ON a.user_id = u.id
  LEFT JOIN user_bank       b ON b.user_id = u.id
  LEFT JOIN user_company    c ON c.user_id = u.id
  ORDER BY u.id
`;

function reshape(row) {
  return {
    id: row.id,
    firstName: row.first_name,
    lastName: row.last_name,
    maidenName: row.maiden_name || '',
    age: row.age,
    gender: row.gender,
    email: row.email,
    phone: row.phone,
    username: row.username,
    birthDate: row.birth_date,
    image: row.image,
    bloodGroup: row.blood_group,
    height: parseFloat(row.height),
    weight: parseFloat(row.weight),
    eyeColor: row.eye_color,
    hair: { color: row.hair_color, type: row.hair_type },
    ip: row.ip_address,
    address: {
      address: row.addr_street,
      city: row.addr_city,
      state: row.addr_state,
      stateCode: row.addr_state_code,
      postalCode: row.addr_postal_code,
      coordinates: {
        lat: parseFloat(row.addr_lat),
        lng: parseFloat(row.addr_lng),
      },
      country: row.addr_country,
    },
    macAddress: row.mac_address,
    university: row.university,
    bank: {
      cardExpire: row.bank_card_expire,
      cardNumber: row.bank_card_number,
      cardType: row.bank_card_type,
      currency: row.bank_currency,
      iban: row.bank_iban,
    },
    company: {
      department: row.company_department,
      name: row.company_name,
      title: row.company_title,
      address: {
        address: row.company_street,
        city: row.company_city,
        state: row.company_state,
        stateCode: row.company_state_code,
        postalCode: row.company_postal_code,
        coordinates: {
          lat: parseFloat(row.company_lat),
          lng: parseFloat(row.company_lng),
        },
        country: row.company_country,
      },
    },
    ein: row.ein,
    ssn: row.ssn,
    userAgent: row.user_agent,
    role: row.role,
  };
}

async function findAll({ limit, skip }) {
  let query = JOIN_QUERY;

  if (limit > 0) {
    query += ` LIMIT ${limit}`;
  }
  if (skip > 0) {
    if (!(limit > 0)) query += ` LIMIT 18446744073709551615`;
    query += ` OFFSET ${skip}`;
  }

  const [rows] = await pool.query(query);
  const [[{ total }]] = await pool.query('SELECT COUNT(*) AS total FROM users');

  return { users: rows.map(reshape), total: Number(total) };
}


module.exports = { findAll };
