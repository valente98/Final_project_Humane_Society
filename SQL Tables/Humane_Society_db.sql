CREATE TABLE animals(
    id Serial Primary key,
    species text,
    breed text,
    name text,
    male_female text,
    age_year numeric,
    age_month numeric,
    age_week numeric,
    size text,
    color text,
    intake_date date,
    location text,
    houseTrained boolean,
    declawed boolean,
    spayed_or_neutured boolean
);

CREATE TABLE manager(
    id Serial Primary key,
    first_name text,
    last_name text,
    username varchar(100),
    password_hash varchar(100),
    email text
);

CREATE TABLE volunteer(
    id Serial Primary key,
    first_name text  unique,
    last_name text,
    email text,
    cell_phone numeric,
    volunteer_type text,
    city text,
    county text,
    home_address text,
    days numeric,
    what_days text
);

CREATE TABLE animal_care(
    volunteer_id integer REFERENCES volunteer(id),
    animal_id integer REFERENCES animals(id),
    reason text
    -- volunteer_contact numeric REFERENCES volunteer(cell_phone)
);

CREATE TABLE facility_care(
    volunteer_id integer REFERENCES volunteer(id),
    volunteer_date date,
    volunteer_time time,
    reason text
);

CREATE VIEW animal_care_with_volunteer AS
SELECT *
FROM animal_care ac
JOIN volunteer v
ON ac.volunteer_id = v.id;

CREATE TABLE application(
    id Serial Primary key,
    first_name text,
    last_name text,
    age numeric,
    email text,
    cell_phone text,
    animal_adopting_id integer REFERENCES animals(id),
    city text,
    county text,
    home_address text,
    ownership_status text,
    amount_pets_own numeric,
    amount_pets_own_past numeric,
    animal_living_with_you boolean,
    inside_outside text,
    kept_during_day text,
    kept_at_night text,
    surrender_animals_at_us boolean,
    adopted_from_us_before boolean,
    shelter_description text,
    current_veterinarian_name text,
    if_no_vet_name_vet_planing text,
    saw_pet_first text
);