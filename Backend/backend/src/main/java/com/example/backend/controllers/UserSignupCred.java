package com.example.backend.controllers;

public class UserSignupCred {
    public Integer id;
    public String first_name;
    public String last_name;
    public String email;
    public String city;
    public String county;
    public String home_address;
    public Integer days;
    public String username;
    public String password_hash;
    public String sessionKey;

    public UserSignupCred(Integer id, String first_name, String last_name, String email, String city, String county, String home_address, Integer days,
                          String username, String password_hash, String sessionKey){
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.city = city;
        this.county = county;
        this.home_address = home_address;
        this.days = days;
        this.username = username;
        this.password_hash = password_hash;
        this.sessionKey = sessionKey;
    }
}
