CREATE DATABASE IF NOT EXISTS avivo_users
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE avivo_users;

CREATE TABLE IF NOT EXISTS users (
  id           INT            NOT NULL AUTO_INCREMENT,
  first_name   VARCHAR(100)   NOT NULL,
  last_name    VARCHAR(100)   NOT NULL,
  maiden_name  VARCHAR(100)            DEFAULT NULL,
  age          TINYINT UNSIGNED        NOT NULL,
  gender       ENUM('male','female','other') NOT NULL,
  email        VARCHAR(255)   NOT NULL UNIQUE,
  phone        VARCHAR(30)    NOT NULL,
  username     VARCHAR(100)   NOT NULL UNIQUE,
  birth_date   DATE                    NOT NULL,
  image        VARCHAR(500)            DEFAULT NULL,
  blood_group  VARCHAR(5)              DEFAULT NULL,
  height       DECIMAL(5,2)            DEFAULT NULL,
  weight       DECIMAL(5,2)            DEFAULT NULL,
  eye_color    VARCHAR(50)             DEFAULT NULL,
  hair_color   VARCHAR(50)             DEFAULT NULL,
  hair_type    VARCHAR(50)             DEFAULT NULL,
  ip_address   VARCHAR(45)             DEFAULT NULL,
  mac_address  VARCHAR(20)             DEFAULT NULL,
  university   VARCHAR(255)            DEFAULT NULL,
  ein          VARCHAR(20)             DEFAULT NULL,
  ssn          VARCHAR(15)             DEFAULT NULL,
  user_agent   TEXT                    DEFAULT NULL,
  role         VARCHAR(50)             DEFAULT 'user',
  created_at   TIMESTAMP               NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  INDEX idx_email    (email),
  INDEX idx_username (username)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS user_addresses (
  id          INT            NOT NULL AUTO_INCREMENT,
  user_id     INT            NOT NULL UNIQUE,
  street      VARCHAR(255)   NOT NULL,
  city        VARCHAR(100)   NOT NULL,
  state       VARCHAR(100)   NOT NULL,
  state_code  VARCHAR(10)             DEFAULT NULL,
  postal_code VARCHAR(20)             DEFAULT NULL,
  lat         DECIMAL(10,6)           DEFAULT NULL,
  lng         DECIMAL(10,6)           DEFAULT NULL,
  country     VARCHAR(100)            DEFAULT 'United States',
  PRIMARY KEY (id),
  CONSTRAINT fk_addr_user FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS user_bank (
  id           INT           NOT NULL AUTO_INCREMENT,
  user_id      INT           NOT NULL UNIQUE,
  card_expire  VARCHAR(10)            DEFAULT NULL,
  card_number  VARCHAR(25)            DEFAULT NULL,
  card_type    VARCHAR(100)           DEFAULT NULL,
  currency     VARCHAR(5)             DEFAULT NULL,
  iban         VARCHAR(50)            DEFAULT NULL,
  PRIMARY KEY (id),
  CONSTRAINT fk_bank_user FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS user_company (
  id          INT            NOT NULL AUTO_INCREMENT,
  user_id     INT            NOT NULL UNIQUE,
  department  VARCHAR(100)            DEFAULT NULL,
  name        VARCHAR(255)            DEFAULT NULL,
  title       VARCHAR(100)            DEFAULT NULL,
  street      VARCHAR(255)            DEFAULT NULL,
  city        VARCHAR(100)            DEFAULT NULL,
  state       VARCHAR(100)            DEFAULT NULL,
  state_code  VARCHAR(10)             DEFAULT NULL,
  postal_code VARCHAR(20)             DEFAULT NULL,
  lat         DECIMAL(10,6)           DEFAULT NULL,
  lng         DECIMAL(10,6)           DEFAULT NULL,
  country     VARCHAR(100)            DEFAULT 'United States',
  PRIMARY KEY (id),
  CONSTRAINT fk_company_user FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
