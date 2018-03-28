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

INSERT INTO manager(first_name, last_name, username, password_hash, email) VALUES(
    'Valente', 'Alvarez', 'valvarez12', '$2a$10$n8bYXVib6.SmjQPJRazwk.IGILPXEa1BoZN3z.XkSXxEgJbuZ5f2i', 'valvarez@basecampcodingacademy.org'
);
CREATE TABLE foster_care(
    id Serial Primary key,
    first_name text,
    last_name text,
    email text,
    cell_phone numeric,
    volunteer_type text,
    city text,
    county text,
    home_address text,
    days numeric,
    what_days text,
    username text,
    password_hash text
);

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