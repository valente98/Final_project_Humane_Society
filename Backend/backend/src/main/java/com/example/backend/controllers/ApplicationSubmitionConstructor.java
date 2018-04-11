package com.example.backend.controllers;

public class ApplicationSubmitionConstructor {
    public String first_name;
    public String last_name;
    public Integer age;
    public String email;
    public Integer animal_id;
    public String city;
    public String county;
    public String home_address;
    public String ownership_status;
    public Integer amount_pets_own;
    public Integer amount_pets_own_past;
    public Boolean animal_living_with_you;
    public String inside_outside;
    public String kept_during_day;
    public String kept_at_night;
    public Boolean surrender_animals_at_us;
    public Boolean adopted_from_us_before;
    public String current_veterinarian_name;
    public String if_no_vet_name_vet_planing;
    public String saw_pet_first;

    public ApplicationSubmitionConstructor(String first_name, String last_name, Integer age, String email,
                                           Integer animal_id, String city, String county, String home_address, String ownership_status,
                                           Integer amount_pets_own, Integer amount_pets_own_past, Boolean animal_living_with_you,
                                           String inside_outside, String kept_during_day, String kept_at_night, Boolean surrender_animals_at_us,
                                           Boolean adopted_from_us_before, String current_veterinarian_name, String if_no_vet_name_vet_planing,
                                           String saw_pet_first){
        this.first_name = first_name;
        this.last_name = last_name;
        this.age = age;
        this.email = email;
        this.animal_id = animal_id;
        this.city = city;
        this.county = county;
        this.home_address = home_address;
        this.ownership_status = ownership_status;
        this.amount_pets_own = amount_pets_own;
        this.amount_pets_own_past = amount_pets_own_past;
        this.animal_living_with_you = animal_living_with_you;
        this.inside_outside = inside_outside;
        this.kept_during_day = kept_during_day;
        this.kept_at_night = kept_at_night;
        this.surrender_animals_at_us = surrender_animals_at_us;
        this.adopted_from_us_before = adopted_from_us_before;
        this.current_veterinarian_name = current_veterinarian_name;
        this.if_no_vet_name_vet_planing = if_no_vet_name_vet_planing;
        this. saw_pet_first = saw_pet_first;
    }

}
