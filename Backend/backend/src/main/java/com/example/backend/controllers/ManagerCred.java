package com.example.backend.controllers;

public class ManagerCred {
    public Integer id;
    public String first_name;
    public String last_name;
    public String email;
    public String sessionKey;

    public ManagerCred(Integer id, String first_name, String last_name, String email,String sessionKey) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.sessionKey = sessionKey;
    }
}
