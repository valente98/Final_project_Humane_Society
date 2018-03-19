CREATE TABLE Animals(
    animal_id Serial Primary key,
    species text,
    breed text,
    name text,
    male_female text,
    age numeric,
    age_type text,
    size text,
    color text,
    intake_date date,
    location text,
    houseTrained boolean,
    declawed boolean,
    spayed_or_neutured boolean
)

CREATE TABLE Veterinarian(
    vet_id Serial Primary key,
    first_name text,
    last_name text,
    username varchar(100),
    password_hash varchar(100),
    email text
)

CREATE TABLE Volunteer(
    volunteer_id Serial Primary key,
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
)

CREATE TABLE Animal_care(
    volunteer_name text reference Volunteer(volunteer_id),
    animal text reference Animals(animal_id),
    reason text,
    volunteer_contact numeric reference Volunteer(cell_phone)
)

CREATE TABLE Application(
    first_name text,
    last_name text,
    email text,
    cell_phone text,
    animal_adopting 
    city text,
)