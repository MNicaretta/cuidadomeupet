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
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    password TEXT NOT NULL,
    identity TEXT NOT NULL,
    phone TEXT NOT NULL
) inherits (entities);

ALTER TABLE users ADD CONSTRAINT users_pkey PRIMARY KEY (id, revision);

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
    name TEXT NOT NULL,
    additional_info TEXT NOT NULL,
    user_id INTEGER NOT NULL,
    user_revision INTEGER NOT NULL,
) inherits (entities);

ALTER TABLE pets ADD CONSTRAINT pets_pkey PRIMARY KEY (id, revision);
ALTER TABLE pets ADD CONSTRAINT pets_user_fkey FOREIGN KEY (user_id, user_revision) REFERENCES user;
