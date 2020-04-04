CREATE TABLE entities (
    id SERIAL NOT NULL,
    revision INTEGER DEFAULT 0 NOT NULL,
    PRIMARY KEY (id, revision)
);

CREATE TABLE characteristics (
    id SERIAL PRIMARY KEY,
    entity_id INTEGER NOT NULL,
    entity_revision INTEGER NOT NULL,
    type SMALLINT NOT NULL,
    value TEXT NOT NULL
);

ALTER TABLE characteristics ADD CONSTRAINT characteristics_entity_fkey FOREIGN KEY (entity_id, entity_revision) REFERENCES entities;

CREATE TABLE users (
    id INTEGER NOT NULL,
    revision INTEGER NOT NULL,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    password TEXT NOT NULL,
    identity TEXT NOT NULL,
    phone TEXT NOT NULL
);

ALTER TABLE users ADD CONSTRAINT users_pkey PRIMARY KEY (id, revision);
ALTER TABLE users ADD CONSTRAINT users_fkey FOREIGN KEY (id, revision) REFERENCES entities;

CREATE TABLE banking_datas (
    id SERIAL PRIMARY KEY,
    bank_code INTEGER NOT NULL,
    agency_number INTEGER NOT NULL,
    account_number INTEGER NOT NULL,
    user_id INTEGER NOT NULL,
	user_revision INTEGER NOT NULL
);

ALTER TABLE banking_datas ADD CONSTRAINT banking_datas_user_fkey FOREIGN KEY (user_id, user_revision) REFERENCES users;

CREATE TABLE pets (
    id INTEGER NOT NULL,
    revision INTEGER NOT NULL,
    name TEXT NOT NULL,
    additional_info TEXT NOT NULL,
    user_id INTEGER NOT NULL,
    user_revision INTEGER NOT NULL
);

ALTER TABLE pets ADD CONSTRAINT pets_pkey PRIMARY KEY (id, revision);
ALTER TABLE pets ADD CONSTRAINT pets_fkey FOREIGN KEY (id, revision) REFERENCES entities;
ALTER TABLE pets ADD CONSTRAINT pets_user_fkey FOREIGN KEY (user_id, user_revision) REFERENCES users;

CREATE TABLE addresses (
    id INTEGER NOT NULL,
    revision INTEGER NOT NULL,
    type SMALLINT NOT NULL,
    size SMALLINT NOT NULL,
    address TEXT NOT NULL,
    zip TEXT NOT NULL
);

ALTER TABLE addresses ADD CONSTRAINT addresses_pkey PRIMARY KEY (id, revision);
ALTER TABLE addresses ADD CONSTRAINT addresses_fkey FOREIGN KEY (id, revision) REFERENCES entities;

CREATE TABLE services (
    id INTEGER NOT NULL,
    revision INTEGER NOT NULL,
    type SMALLINT NOT NULL,
    price REAL NOT NULL,
    distance NUMERIC,
    state SMALLINT NOT NULL,
    user_id INTEGER NOT NULL,
    user_revision INTEGER NOT NULL,
    address_id INTEGER,
    address_revision INTEGER
);

ALTER TABLE services ADD CONSTRAINT services_pkey PRIMARY KEY (id, revision);
ALTER TABLE services ADD CONSTRAINT services_fkey FOREIGN KEY (id, revision) REFERENCES entities;
ALTER TABLE services ADD CONSTRAINT services_user_fkey FOREIGN KEY (user_id, user_revision) REFERENCES users;
ALTER TABLE services ADD CONSTRAINT services_address_fkey FOREIGN KEY (address_id, address_revision) REFERENCES addresses;

CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    start_date TIMESTAMP NOT NULL,
    end_date TIMESTAMP NOT NULL,
    total_value REAL NOT NULL,
    state SMALLINT NOT NULL,
    service_id INTEGER NOT NULL,
    service_revision INTEGER NOT NULL,
    user_id INTEGER NOT NULL,
    user_revision INTEGER NOT NULL,
    address_id INTEGER,
    address_revision INTEGER
);

ALTER TABLE orders ADD CONSTRAINT orders_service_fkey FOREIGN KEY (service_id, service_revision) REFERENCES services;
ALTER TABLE orders ADD CONSTRAINT orders_user_fkey FOREIGN KEY (user_id, user_revision) REFERENCES users;
ALTER TABLE orders ADD CONSTRAINT orders_address_fkey FOREIGN KEY (address_id, address_revision) REFERENCES addresses;

CREATE TABLE evaluations (
    id SERIAL PRIMARY KEY,
    grade SMALLINT not null,
    commentaries TEXT NOT NULL,
    order_id INTEGER NOT NULL REFERENCES orders,
    user_id INTEGER NOT NULL,
    user_revision INTEGER NOT NULL
);

ALTER TABLE evaluations ADD CONSTRAINT evaluations_user_fkey FOREIGN KEY (user_id, user_revision) REFERENCES users;

CREATE TABLE orders_has_pets (
    order_id INTEGER NOT NULL REFERENCES orders,
    pet_id INTEGER NOT NULL,
    pet_revision INTEGER NOT NULL
);

ALTER TABLE orders_has_pets ADD CONSTRAINT orders_has_pets_pkey PRIMARY KEY (order_id, pet_id, pet_revision);
ALTER TABLE orders_has_pets ADD CONSTRAINT orders_has_pets_pet_fkey FOREIGN KEY (pet_id, pet_revision) REFERENCES pets;
