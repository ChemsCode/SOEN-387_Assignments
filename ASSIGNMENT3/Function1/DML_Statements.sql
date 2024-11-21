-- Insert data into Musician
INSERT INTO Musician (name, genre, country, debut_year) VALUES
('The Beatles', 'Rock', 'United Kingdom', 1960),
('Taylor Swift', 'Pop', 'United States', 2006),
('Daft Punk', 'Electronic', 'France', 1993);

-- Insert data into Album
INSERT INTO Album (musician_id, title, release_year, genre) VALUES
(1, 'Abbey Road', 1969, 'Rock'),
(1, 'Sgt. Pepper''s Lonely Hearts Club Band', 1967, 'Rock'),
(2, '1989', 2014, 'Pop'),
(2, 'Fearless', 2008, 'Country'),
(3, 'Random Access Memories', 2013, 'Electronic');

-- Insert data into Track
INSERT INTO Track (album_id, title, duration, track_number) VALUES
(1, 'Come Together', '00:04:19', 1),
(1, 'Something', '00:03:03', 2),
(2, 'Sgt. Pepper''s Lonely Hearts Club Band', '00:02:02', 1),
(3, 'Welcome to New York', '00:03:32', 1),
(3, 'Blank Space', '00:03:51', 2),
(5, 'Get Lucky', '00:06:09', 1);