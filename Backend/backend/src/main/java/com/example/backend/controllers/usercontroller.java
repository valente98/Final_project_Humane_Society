package com.example.backend.controllers;

import com.example.backend.Repository.AnimalRepository;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;
import java.util.ArrayList;

@RestController
public class usercontroller {

    AnimalRepository animals = new AnimalRepository();
    @CrossOrigin()
    @PostMapping("/showAnimals")
    public ArrayList pets(@RequestBody SpeciesCred animal) throws SQLException{
        return animals.getanimalbyspecies(animal.animal);

}
    @CrossOrigin()
    @PostMapping("/otherPets")
    public ArrayList otherPets() throws SQLException{
        return animals.getotherPets();
    }

    @CrossOrigin()
    @PostMapping("/FosterSignup")
    public boolean FosterSignup (@RequestBody UserSignupCred user) throws SQLException{
        return false;
    }

    @CrossOrigin()
    @PostMapping("/FosterLogin")
    public boolean FosterLogin (@RequestBody UserLoginCred user) throws SQLException{
        return false;
    }
}
