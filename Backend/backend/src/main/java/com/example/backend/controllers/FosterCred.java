package com.example.backend.controllers;

public class FosterCred {
    public Integer id;
    public String first_name;
    public String last_name;
    public String email;
    public String city;
    public String county;
    public String home_address;
    public String username;
    public String password_hash;
    public Integer animal_fostering;
    public String sessionKey;

    public FosterCred(Integer id, String first_name, String last_name, String email, String city, String county, String home_address,
                      String username, String password_hash, Integer animal_fostering, String sessionKey){
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.city = city;
        this.county = county;
        this.home_address = home_address;
        this.username = username;
        this.password_hash = password_hash;
        this.animal_fostering = animal_fostering;
        this.sessionKey = sessionKey;
    }
}
