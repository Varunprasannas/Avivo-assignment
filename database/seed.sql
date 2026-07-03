USE avivo_users;

SET FOREIGN_KEY_CHECKS = 0;
TRUNCATE TABLE user_company;
TRUNCATE TABLE user_bank;
TRUNCATE TABLE user_addresses;
TRUNCATE TABLE users;
SET FOREIGN_KEY_CHECKS = 1;

INSERT INTO users
  (id, first_name, last_name, maiden_name, age, gender, email, phone, username, birth_date, image, blood_group, height, weight, eye_color, hair_color, hair_type, ip_address, mac_address, university, ein, ssn, user_agent, role)
VALUES
  (1,  'Emily',    'Johnson',  'Smith',    29, 'female', 'emily.johnson@x.dummyjson.com',    '+81 965-431-3024', 'emilys',    '1996-05-30', 'https://dummyjson.com/icon/emilys/128',    'O-',  193.24, 63.16, 'Green',  'Brown',  'Curly',    '42.48.100.32',   '47:fa:41:18:ec:eb', 'University of Wisconsin--Madison',       '977-175', '900-590-289', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/96.0',  'admin'),
  (2,  'Michael',  'Williams', '',         36, 'male',   'michael.williams@x.dummyjson.com', '+49 258-627-6644', 'michaelw',  '1989-08-10', 'https://dummyjson.com/icon/michaelw/128',  'B+',  186.22, 76.32, 'Red',    'Green',  'Straight', '12.13.116.142',  '79:15:78:99:60:aa', 'Ohio State University',                  '912-602', '108-953-962', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Edge/97.0',         'admin'),
  (3,  'Sophia',   'Brown',    '',         43, 'female', 'sophia.brown@x.dummyjson.com',     '+81 210-652-2785', 'sophiab',   '1982-11-06', 'https://dummyjson.com/icon/sophiab/128',   'O-',  177.72, 52.60, 'Hazel',  'White',  'Wavy',     '214.225.51.195', '12:a3:d3:6f:5c:5b', 'Pepperdine University',                  '963-113', '638-461-822', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/96.0',       'admin'),
  (4,  'James',    'Davis',    '',         46, 'male',   'james.davis@x.dummyjson.com',      '+49 614-958-9364', 'jamesd',    '1979-05-04', 'https://dummyjson.com/icon/jamesd/128',    'AB+', 193.31, 62.10, 'Amber',  'Blonde', 'Straight', '101.118.131.66', '10:7d:df:1f:97:58', 'University of Southern California',      '904-810', '116-951-314', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/97.0',  'admin'),
  (5,  'Emma',     'Miller',   'Johnson',  31, 'female', 'emma.miller@x.dummyjson.com',      '+91 759-776-1614', 'emmaj',     '1994-06-13', 'https://dummyjson.com/icon/emmaj/128',     'AB-', 192.80, 63.62, 'Green',  'White',  'Straight', '224.126.22.183', '32:b9:7e:8d:f5:e8', 'Northeastern University',                '403-505', '526-210-885', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:97.0) Gecko/20100101 Firefox/97.0', 'admin'),
  (6,  'Oliver',   'Wilson',   '',         22, 'male',   'oliver.wilson@x.dummyjson.com',    '+1 301-555-0192',  'oliverw',   '2003-01-15', 'https://dummyjson.com/icon/oliverw/128',   'A+',  178.50, 72.40, 'Blue',   'Black',  'Straight', '10.0.0.12',      'aa:bb:cc:dd:ee:01', 'Stanford University',                    '123-456', '123-456-789', 'Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 Chrome/98.0',                   'user'),
  (7,  'Ava',      'Moore',    'Lee',      27, 'female', 'ava.moore@x.dummyjson.com',        '+1 212-555-0145',  'avam',      '1998-03-22', 'https://dummyjson.com/icon/avam/128',      'B-',  163.00, 57.80, 'Brown',  'Red',    'Curly',    '172.16.0.25',    'aa:bb:cc:dd:ee:02', 'Harvard University',                     '234-567', '234-567-890', 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_0) AppleWebKit/605.1.15',                  'user'),
  (8,  'Noah',     'Taylor',   '',         34, 'male',   'noah.taylor@x.dummyjson.com',      '+44 7700-900123',  'noaht',     '1991-07-08', 'https://dummyjson.com/icon/noaht/128',     'A-',  182.00, 80.00, 'Grey',   'Brown',  'Wavy',     '192.168.1.5',    'aa:bb:cc:dd:ee:03', 'MIT',                                    '345-678', '345-678-901', 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 Chrome/99.0',                 'user'),
  (9,  'Isabella', 'Anderson', 'Cruz',     38, 'female', 'isabella.anderson@x.dummyjson.com','+61 2 5550 1234',  'isabellaa', '1987-09-19', 'https://dummyjson.com/icon/isabellaa/128', 'O+',  168.40, 60.20, 'Green',  'Black',  'Straight', '10.10.10.10',    'aa:bb:cc:dd:ee:04', 'University of Melbourne',                '456-789', '456-789-012', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 12_0) Safari/605.1',                      'user'),
  (10, 'Liam',     'Thomas',   '',         25, 'male',   'liam.thomas@x.dummyjson.com',      '+1 415-555-0167',  'liamt',     '2000-12-01', 'https://dummyjson.com/icon/liamt/128',     'B+',  175.00, 68.50, 'Blue',   'Blonde', 'Straight', '203.0.113.5',    'aa:bb:cc:dd:ee:05', 'University of California Berkeley',      '567-890', '567-890-123', 'Mozilla/5.0 (Windows NT 11.0) AppleWebKit/537.36 Chrome/100.0',                  'user'),
  (11, 'Mia',      'Jackson',  '',         30, 'female', 'mia.jackson@x.dummyjson.com',      '+33 1 55 55 55 55','miaj',      '1995-04-17', 'https://dummyjson.com/icon/miaj/128',      'A+',  160.00, 54.00, 'Hazel',  'Brown',  'Wavy',     '198.51.100.1',   'aa:bb:cc:dd:ee:06', 'Sciences Po Paris',                      '678-901', '678-901-234', 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:98.0) Gecko/20100101 Firefox/98.0',  'moderator'),
  (12, 'Lucas',    'White',    '',         41, 'male',   'lucas.white@x.dummyjson.com',      '+49 30 12345678',  'lucasw',    '1984-02-28', 'https://dummyjson.com/icon/lucasw/128',    'AB+', 188.00, 85.30, 'Green',  'Grey',   'Straight', '192.0.2.100',    'aa:bb:cc:dd:ee:07', 'Humboldt-Universität zu Berlin',        '789-012', '789-012-345', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/101.0',     'user'),
  (13, 'Charlotte','Harris',   'Young',    26, 'female', 'charlotte.harris@x.dummyjson.com', '+81 3-1234-5678',  'charlotteh','1999-10-05', 'https://dummyjson.com/icon/charlotteh/128','O+',  165.30, 55.90, 'Brown',  'Black',  'Curly',    '10.20.30.40',    'aa:bb:cc:dd:ee:08', 'University of Tokyo',                    '890-123', '890-123-456', 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_0) AppleWebKit/605.1.15',                  'user'),
  (14, 'Elijah',   'Martin',   '',         50, 'male',   'elijah.martin@x.dummyjson.com',    '+1 713-555-0198',  'elijahm',   '1975-06-22', 'https://dummyjson.com/icon/elijahm/128',   'A-',  180.00, 90.10, 'Blue',   'White',  'Straight', '172.20.10.5',    'aa:bb:cc:dd:ee:09', 'Rice University',                        '901-234', '901-234-567', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 11_0) Safari/605.1',                      'user'),
  (15, 'Amelia',   'Garcia',   '',         33, 'female', 'amelia.garcia@x.dummyjson.com',    '+34 91 123 4567',  'ameliag',   '1992-08-14', 'https://dummyjson.com/icon/ameliag/128',   'B+',  170.00, 61.00, 'Green',  'Brown',  'Wavy',     '185.1.2.3',      'aa:bb:cc:dd:ee:0a', 'Universidad Complutense de Madrid',     '012-345', '012-345-678', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Gecko/20100101 Firefox/99.0',         'user'),
  (16, 'Mason',    'Martinez', '',         44, 'male',   'mason.martinez@x.dummyjson.com',   '+52 55 5555 5555', 'masonm',    '1981-03-11', 'https://dummyjson.com/icon/masonm/128',    'O-',  185.50, 78.00, 'Brown',  'Black',  'Straight', '201.1.2.3',      'aa:bb:cc:dd:ee:0b', 'UNAM',                                   '123-789', '123-789-456', 'Mozilla/5.0 (Linux; Android 12) AppleWebKit/537.36 Chrome/100.0 Mobile',        'user'),
  (17, 'Harper',   'Robinson', 'Evans',    28, 'female', 'harper.robinson@x.dummyjson.com',  '+1 206-555-0134',  'harperr',   '1997-11-30', 'https://dummyjson.com/icon/harperr/128',   'A+',  172.00, 59.50, 'Amber',  'Blonde', 'Curly',    '10.0.1.1',       'aa:bb:cc:dd:ee:0c', 'University of Washington',               '234-890', '234-890-567', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/102.0','user'),
  (18, 'Ethan',    'Clark',    '',         39, 'male',   'ethan.clark@x.dummyjson.com',      '+44 20 7946 0800', 'ethanc',    '1986-07-04', 'https://dummyjson.com/icon/ethanc/128',    'B-',  183.00, 77.80, 'Grey',   'Brown',  'Straight', '195.1.5.6',      'aa:bb:cc:dd:ee:0d', 'University of Oxford',                   '345-901', '345-901-678', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Edge/100.0',       'moderator'),
  (19, 'Evelyn',   'Rodriguez','',         24, 'female', 'evelyn.rodriguez@x.dummyjson.com', '+1 305-555-0177',  'evelynr',   '2001-02-18', 'https://dummyjson.com/icon/evelynr/128',   'AB-', 158.00, 50.30, 'Blue',   'Black',  'Wavy',     '10.5.5.5',       'aa:bb:cc:dd:ee:0e', 'University of Miami',                    '456-012', '456-012-789', 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_5) AppleWebKit/605.1.15',                  'user'),
  (20, 'Aiden',    'Lewis',    '',         55, 'male',   'aiden.lewis@x.dummyjson.com',      '+1 617-555-0189',  'aidenl',    '1970-09-09', 'https://dummyjson.com/icon/aidenl/128',    'O+',  176.00, 82.00, 'Green',  'Grey',   'Straight', '8.8.4.4',        'aa:bb:cc:dd:ee:0f', 'Boston University',                      '567-123', '567-123-890', 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 Chrome/103.0',                'user');

INSERT INTO user_addresses (user_id, street, city, state, state_code, postal_code, lat, lng, country) VALUES
  (1,  '626 Main Street',       'Phoenix',       'Mississippi',  'MS', '29112', -77.162130, -92.084824, 'United States'),
  (2,  '385 Fifth Street',      'Houston',       'Alabama',      'AL', '38807',  22.815468, 115.608581, 'United States'),
  (3,  '1642 Ninth Street',     'Washington',    'Alabama',      'AL', '32822',  45.289366,  46.832664, 'United States'),
  (4,  '238 Jefferson Street',  'Seattle',       'Pennsylvania', 'PA', '68354',  16.782513,-139.347230, 'United States'),
  (5,  '607 Fourth Street',     'Jacksonville',  'Colorado',     'CO', '26593',   0.505589,-157.432810, 'United States'),
  (6,  '101 Oak Avenue',        'Austin',        'Texas',        'TX', '73301',  30.267153, -97.743061, 'United States'),
  (7,  '250 Park Place',        'New York',      'New York',     'NY', '10001',  40.712776, -74.005974, 'United States'),
  (8,  '3 Baker Street',        'London',        'England',      'ENG','W1U 3BW',51.520730,  -0.156583, 'United Kingdom'),
  (9,  '12 Collins Street',     'Melbourne',     'Victoria',     'VIC','3000',  -37.813629, 144.963058, 'Australia'),
  (10, '800 Market Street',     'San Francisco', 'California',   'CA', '94102',  37.779278,-122.419161, 'United States'),
  (11, '15 Rue de Rivoli',      'Paris',         'Île-de-France','IDF','75001',  48.860611,   2.337644, 'France'),
  (12, '5 Unter den Linden',    'Berlin',        'Berlin',       'BE', '10117',  52.517037,  13.388860, 'Germany'),
  (13, '1-1 Shinjuku',          'Tokyo',         'Tokyo',        'TK', '160-0022',35.689487,139.691711, 'Japan'),
  (14, '2500 Main Street',      'Houston',       'Texas',        'TX', '77002',  29.749907, -95.367697, 'United States'),
  (15, 'Calle Mayor 10',        'Madrid',        'Community of Madrid','M','28001',40.415363, -3.707398,'Spain'),
  (16, 'Av. Insurgentes 300',   'Mexico City',   'CDMX',         'MX', '06600',  19.427023, -99.167654, 'Mexico'),
  (17, '400 Pike Street',       'Seattle',       'Washington',   'WA', '98101',  47.609722,-122.332367, 'United States'),
  (18, '10 Downing Street',     'London',        'England',      'ENG','SW1A 2AA',51.503380, -0.127601, 'United Kingdom'),
  (19, '1600 SW 1st Ave',       'Miami',         'Florida',      'FL', '33135',  25.764078, -80.205795, 'United States'),
  (20, '700 Boylston Street',   'Boston',        'Massachusetts','MA', '02116',  42.349277, -71.077965, 'United States');

INSERT INTO user_bank (user_id, card_expire, card_number, card_type, currency, iban) VALUES
  (1,  '05/28', '3693233511855044', 'Diners Club International', 'GBP', 'GB74MH2UZLR9TRPHYNU8F8'),
  (2,  '01/30', '3530633803003665', 'JCB',                       'USD', 'DE26362283149158045865'),
  (3,  '10/27', '6011212053392887', 'Discover',                  'EUR', 'DE12191213468288004835'),
  (4,  '07/30', '5303440212268149', 'Mastercard',                'CAD', 'DE01300746880579852937'),
  (5,  '07/30', '5237188057591130', 'Mastercard',                'NZD', 'DE19182355652037133559'),
  (6,  '03/29', '4111111111111111', 'Visa',                      'USD', 'US64SVBKUS6S3783083900'),
  (7,  '11/28', '4012888888881881', 'Visa',                      'USD', 'US12345678901234567890'),
  (8,  '09/27', '5500005555555559', 'Mastercard',                'GBP', 'GB29NWBK60161331926819'),
  (9,  '06/26', '6011111111111117', 'Discover',                  'AUD', 'AU1234567890123456'),
  (10, '12/30', '378282246310005',  'American Express',          'USD', 'US09876543210987654321'),
  (11, '04/27', '3566002020360505', 'JCB',                       'EUR', 'FR7630006000011234567890189'),
  (12, '08/29', '6011601160116611', 'Discover',                  'EUR', 'DE89370400440532013000'),
  (13, '02/28', '3714 496353 98431','American Express',          'JPY', 'JP0123456789012345678901'),
  (14, '10/26', '5105105105105100', 'Mastercard',                'USD', 'US54321098765432109876'),
  (15, '01/29', '4532015112830366', 'Visa',                      'EUR', 'ES9121000418450200051332'),
  (16, '05/27', '4716727670308900', 'Visa',                      'MXN', 'MX0012345678901234567890'),
  (17, '07/28', '4485770752404018', 'Visa',                      'USD', 'US11223344556677889900'),
  (18, '03/30', '5425233430109903', 'Mastercard',                'GBP', 'GB82WEST12345698765432'),
  (19, '09/29', '2222420000001113', 'Mastercard',                'USD', 'US99887766554433221100'),
  (20, '11/27', '4024007148673335', 'Visa',                      'USD', 'US12344321567887650987');

INSERT INTO user_company (user_id, department, name, title, street, city, state, state_code, postal_code, lat, lng, country) VALUES
  (1,  'Engineering',            'Dooley, Kozey and Cronin',  'Sales Manager',             '263 Tenth Street',       'San Francisco', 'Wisconsin',    'WI', '37657',  71.814525,-161.150263,'United States'),
  (2,  'Support',                'Spinka - Dickinson',        'Support Specialist',        '395 Main Street',        'Los Angeles',   'New Hampshire','NH', '73442',  79.098326,-119.624845,'United States'),
  (3,  'Research and Development','Schiller - Zieme',         'Accountant',                '1896 Washington Street', 'Dallas',        'Nevada',       'NV', '88511',  20.086743, -34.577107,'United States'),
  (4,  'Support',                'Pagac and Sons',            'Research Analyst',          '1622 Lincoln Street',    'Fort Worth',    'Pennsylvania', 'PA', '27768',  54.911930, -79.498328,'United States'),
  (5,  'Human Resources',        'Graham - Gulgowski',        'Quality Assurance Engineer','1460 Sixth Street',      'San Antonio',   'Idaho',        'ID', '21965',  44.346545, -26.944701,'United States'),
  (6,  'Engineering',            'Tech Innovations Inc',      'Software Engineer',         '500 Innovation Drive',   'Austin',        'Texas',        'TX', '78701',  30.267153, -97.743061,'United States'),
  (7,  'Marketing',              'Brand Builders LLC',        'Marketing Manager',         '100 Madison Ave',        'New York',      'New York',     'NY', '10016',  40.748817, -73.985428,'United States'),
  (8,  'Finance',                'Global Finance Ltd',        'Financial Analyst',         '1 Canada Square',        'London',        'England',      'ENG','E14 5AB', 51.504555,  -0.021606,'United Kingdom'),
  (9,  'Product',                'DownUnder Tech Pty',        'Product Manager',           '80 Collins Street',      'Melbourne',     'Victoria',     'VIC','3000',   -37.813629,144.963058,'Australia'),
  (10, 'Data Science',           'DataDriven Co',             'Data Scientist',            '101 California St',      'San Francisco', 'California',   'CA', '94111',  37.793196,-122.399412,'United States'),
  (11, 'Design',                 'Creative Studios SARL',     'UX Designer',               '22 Rue du Faubourg',     'Paris',         'Île-de-France','IDF','75008',  48.873792,   2.308388,'France'),
  (12, 'Operations',             'EurOps GmbH',               'Operations Lead',           '200 Friedrichstrasse',   'Berlin',        'Berlin',       'BE', '10117',  52.512550,  13.390530,'Germany'),
  (13, 'Engineering',            'Tokyo Systems KK',          'Backend Engineer',          '2-1 Marunouchi',         'Tokyo',         'Tokyo',        'TK', '100-0005',35.681236,139.767125,'Japan'),
  (14, 'Legal',                  'LexCorp Houston',           'Legal Counsel',             '1200 Smith Street',      'Houston',       'Texas',        'TX', '77002',  29.753197, -95.368481,'United States'),
  (15, 'Sales',                  'Ventas Globales SA',        'Sales Representative',      'Paseo de la Castellana', 'Madrid',        'Community of Madrid','M','28046',40.452354, -3.688344,'Spain'),
  (16, 'Customer Success',       'Servicios MX SA de CV',     'Customer Success Manager',  'Av. Reforma 505',        'Mexico City',   'CDMX',         'MX', '06600',  19.432608, -99.133209,'Mexico'),
  (17, 'Engineering',            'Pacific Dev Group',         'Full Stack Developer',      '300 Pine Street',        'Seattle',       'Washington',   'WA', '98101',  47.608013,-122.335167,'United States'),
  (18, 'Research',               'BritLab Research Ltd',      'Senior Researcher',         '5 Exhibition Road',      'London',        'England',      'ENG','SW7 2PB', 51.499440,  -0.174190,'United Kingdom'),
  (19, 'Marketing',              'SunBelt Media Inc',         'Content Strategist',        '7900 NW 27th Ave',       'Miami',         'Florida',      'FL', '33147',  25.823090, -80.249230,'United States'),
  (20, 'Education',              'EduFirst Corp',             'Curriculum Designer',       '360 Huntington Ave',     'Boston',        'Massachusetts','MA', '02115',  42.339630, -71.089850,'United States');
