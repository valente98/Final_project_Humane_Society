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
    email text,
    sessionKey text
);

CREATE TABLE foster_care(
    id Serial Primary key,
    first_name text,
    last_name text,
    email text,
    city text,
    county text,
    home_address text,
    username text,
    password_hash text,
    animal_fostering integer REFERENCES animals(id),
    sessionKey text
);

Create Table FosterApproval(
    fosterid Integer REFERENCES foster_care(id),
    animalId Integer REFERENCES animals(id)
);

CREATE TABLE application(
    id Serial Primary key,
    first_name text,
    last_name text,
    age numeric,
    email text,
    animal_adopting_id integer REFERENCES animals(id) ON DELETE CASCADE,
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
    current_veterinarian_name text,
    if_no_vet_name_vet_planing text,
    saw_pet_first text
);