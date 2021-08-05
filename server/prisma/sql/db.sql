CREATE DATABASE nike;

CREATE TABLE products(
    _id uuid NOT NULL DEFAULT uuid_generate_v4(),
    catagory VARCHAR(50) NOT NULL,
    name VARCHAR(150) NOT NULL,
    tagname VARCHAR(150) NOT NULL,
    price MONEY NOT NULL,
    description TEXT NOT NULL,
    gender VARCHAR(20) DEFAULT 'unisex',
    cover TEXT NOT NULL,
    otherimages TEXT[3] NOT NULL,
    admin VARCHAR(100),
    tags VARCHAR[] NOT NULL
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(_id) 
);

CREATE TABLE orders(
    order_id uuid NOT NULL DEFAULT uuid_generate_v4(),
    product_id uuid NOT NULL REFERENCES products(_id),
    size VARCHAR(20) NOT NULL,
    quantity NUMERIC NOT NULL,
    price MONEY NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(order_id),
    UNIQUE(order_id)
);
CREATE TABLE wishlist (
     _id uuid NOT NULL DEFAULT uuid_generate_v4(),
     product_id uuid NOT NULL REFERENCES products(_id),
     user_id uuid NOT NULL REFERENCES users(_id),
     UNIQUE(_id),
     PRIMARY KEY(_id)
 );

CREATE TABLE cart(
    _id uuid NOT NULL DEFAULT uuid_generate_v4()
    product_id uuid NOT NULL REFERENCES products(_id),
    user_id uuid NOT NULL REFERENCES user(_id),
    size VARCHAR(20) NOT NULL,
    quantity NUMERIC NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE public.users(
    _id uuid NOT NULL DEFAULT uuid_generate_v4(),
    img TEXT,
    fullname VARCHAR(200) NOT NULL,
    username VARCHAR(20) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(_id),
    UNIQUE(_id)  
);