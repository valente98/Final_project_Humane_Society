package com.example.backend.controllers;

import com.example.backend.Repository.ManagerRepository;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.sql.SQLException;

@RestController
public class loginControler {

    @PostMapping("/login")
    public Boolean login(@RequestBody Credentials cred) throws SQLException {
        ManagerRepository manager = new ManagerRepository();
        return manager.login(cred.username, cred.password);
    }
}