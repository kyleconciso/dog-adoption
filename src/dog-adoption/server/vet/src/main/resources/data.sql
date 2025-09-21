
DELETE FROM dog
    WHERE is_adopted = FALSE

INSERT INTO dog (name, breed, age, is_adopted, image_url) VALUES
                                                            ('Bantay', 'Aspin', 3, false, 'https://i.imgur.com/VSmapXI.jpeg'),
                                                            ('Champ', 'Shih Tzu', 2, false, 'https://i.imgur.com/Ly3v8PMb.jpg'),
                                                            ('Coco', 'Bichon Frise', 1, false, 'https://i.imgur.com/ITFFhxhb.jpg'),
                                                            ('Max', 'Golden Retriever', 4, false, 'https://i.imgur.com/ePwonn0b.jpg'),
                                                            ('Bella', 'Labrador Retriever', 2, false, 'https://i.imgur.com/CzaI6Gob.jpg'),
                                                            ('Buddy', 'German Shepherd', 5, false, 'https://i.imgur.com/Tj0IZPvb.jpg'),
                                                            ('Lucy', 'Poodle', 3, false, 'https://i.imgur.com/pq2lYGhb.jpg'),
                                                            ('Daisy', 'Beagle', 1, false, 'https://i.imgur.com/EdQs9jAb.jpg'),
                                                            ('Bruno', 'Siberian Husky', 4, false, 'https://i.imgur.com/bfKDeWrb.jpg'),
                                                            ('Charlie', 'Pug', 2, false, 'https://i.imgur.com/LnAowS0b.jpg'),
                                                            ('Rocky', 'American Bully', 3, false, 'https://i.imgur.com/EyEir9Cb.jpg'),
                                                            ('Princess', 'Chihuahua', 1, false, 'https://i.imgur.com/Z0vhwxmb.jpg'),
                                                            ('Whitey', 'Japanese Spitz', 4, false, 'https://i.imgur.com/pfemt5wb.jpg')
