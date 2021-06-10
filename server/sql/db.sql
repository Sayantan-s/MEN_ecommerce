CREATE DATABASE nike;

CREATE TABLE product(
    _id SERIAL PRIMARY KEY NOT NULL,
    catagory VARCHAR(50) NOT NULL,
    productname VARCHAR(150) NOT NULL,
    tagname VARCHAR(150) NOT NULL,
    price MONEY NOT NULL,
    description TEXT NOT NULL,
    gender VARCHAR(20) DEFAULT 'unisex',
    cover TEXT NOT NULL,
    otherImages TEXT[3] NOT NULL,
    adminName VARCHAR(100)
);