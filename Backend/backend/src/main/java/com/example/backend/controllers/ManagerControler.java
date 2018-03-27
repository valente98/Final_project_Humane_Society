package com.example.backend.controllers;

import com.example.backend.Repository.ManagerRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.sql.SQLException;

@RestController
public class ManagerControler {
    ManagerRepository manager = new ManagerRepository();
    @CrossOrigin()
    @PostMapping("/login")
    public Boolean login(@RequestBody Credentials cred) throws SQLException {
        return manager.login(cred.username, cred.password);
    }
    @CrossOrigin()
    @PostMapping("/insertAnimal")
    public Boolean insertAnimal(@RequestBody Animals animal) throws SQLException{
         return manager.Insert_animal(animal.species, animal.breed, animal.name, animal.male_female, animal.age_year, animal.age_month,
                 animal.age_week, animal.size, animal.color, animal.date, animal.location, animal.houseTrained, animal.declawed, animal.spayed_or_neutured);
    }
}