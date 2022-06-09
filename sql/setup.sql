-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP table if exists books;

CREATE table books (
  id BIGINT GENERATED ALWAYS AS IDENTITY,
  title VARCHAR NOT NULL,
  author VARCHAR NOT NULL,
  finished BOOLEAN NOT NULL,
  published INT NOT NULL,
  genre VARCHAR NOT NULL
);

INSERT INTO books (title, author, finished, published, genre) VALUES ('Anxious People', 'Fredrik Backman', true, 2019, 'fiction'),
('The Giver of Stars', 'Jojo Moyes', true, 2019, 'historical fiction'),
('Seven Days in June', 'Tia Williams', true, 2021, 'fiction'),
('The WIcked Sister', 'Karen Dionne', true, 2020, 'thriller'),
('Year of Yes', 'Shonda Rhimes', true, 2015, 'memoir'),
('The Scent Keeper', 'Erica Bauermeister', true, 2019, 'fiction'),
('This is How it Always is', 'Laurie Frankel', true, 2017, 'fiction'),
('Me Before You', 'Jojo Moyes', true, 2012, 'romance'),
('The Last Letter from Your Lover', 'Jojo Moyes', true, 2008, 'historical fiction'),
('It Ends with Us', 'Colleen Hoover', true, 2016, 'fiction'),
('Confident Women: Swindlers, Grifters, and Shapeshifters of the Feminine Persuasion', ' Tori Telfer', true, 2021, 'nonfiction'),
('Malibu Rising', 'Taylor Jenkins Reid', false, 2021, 'historical fiction'),
('Call Us What We Carry', 'Amanda Gorman', false, 2021, 'poetry'),
('Daisy Jones & The Six', 'Taylor Jenkins Reid', false, 2019, 'historical fiction'),
('The Other Black Girl', 'Zakiya Dalila Harris', false, 2021, 'thriller');