


CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
ALTER TABLE products
	ADD COLUMN u_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
	ADD COLUMN u_type VARCHAR(70) DEFAULT 'To be define',
	ADD COLUMN u_name VARCHAR(70),
	ADD COLUMN u_price NUMERIC NOT NULL DEFAULT 0.00,
	ADD COLUMN u_image_url VARCHAR(255),
	ADD COLUMN u_description VARCHAR(250),
	ADD COLUMN u_stars INT;




INSERT INTO products (u_type, u_name, u_price, u_image_url, u_description, u_stars)
VALUES ('Decoration',
		'Fleur',
		100.00,
		'/img/galina-n-miziNqvJx5M-unsplash.jpg',
		'Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
		2), ('Decoration',
		'Terre',
		95.00,
		'/img/galina-n-miziNqvJx5M-unsplash.jpg',
		'Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
		2), ('Decoration',
		'Terre',
		50.00,
		'/img/galina-n-miziNqvJx5M-unsplash.jpg',
		'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested',
		5);