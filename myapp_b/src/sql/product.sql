



CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

DROP TABLE products;
DELETE FROM products;

CREATE TABLE products (
	u_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
	u_type VARCHAR(70) DEFAULT 'To be define',
	u_name VARCHAR(70),
	u_price NUMERIC NOT NULL DEFAULT 0.00,
	u_image_url VARCHAR(255),
	u_description VARCHAR(250),
	u_stars INT,
	u_active BOOLEAN NOT NULL DEFAULT TRUE,
	u_nb_of_sell INT,
	u_qty INT);

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