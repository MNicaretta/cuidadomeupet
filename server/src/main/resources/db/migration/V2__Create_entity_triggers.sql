CREATE FUNCTION set_next_id() RETURNS TRIGGER AS $set_next_id$
    BEGIN
        INSERT INTO entities (revision) VALUES (new.revision);
        SELECT MAX(id) FROM entities INTO NEW.id;
        RETURN NEW;
    END;
$set_next_id$ LANGUAGE plpgsql;

CREATE TRIGGER "users_entity_id" BEFORE INSERT ON users
    FOR EACH ROW 
    WHEN (NEW.id IS NULL)
    EXECUTE PROCEDURE set_next_id();

CREATE TRIGGER "pets_entity_id" BEFORE INSERT ON pets
    FOR EACH ROW
    WHEN (NEW.id IS NULL)
    EXECUTE PROCEDURE set_next_id();

CREATE TRIGGER "addresses_entity_id" BEFORE INSERT ON addresses
    FOR EACH ROW 
    WHEN (NEW.id IS NULL)
    EXECUTE PROCEDURE set_next_id();

CREATE TRIGGER "services_entity_id" BEFORE INSERT ON services
    FOR EACH ROW 
    WHEN (NEW.id IS NULL)
    EXECUTE PROCEDURE set_next_id();
