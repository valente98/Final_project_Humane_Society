package com.example.backend.controllers;

import com.example.backend.Repository.AnimalRepository;
import com.example.backend.Repository.FosterParentRepository;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Random;

@RestController
public class usercontroller {

    AnimalRepository animals = new AnimalRepository();
    FosterParentRepository foster = new FosterParentRepository();
    @CrossOrigin()
    @PostMapping("/showAnimals")
    public ArrayList pets(@RequestBody SpeciesCred animal) throws SQLException{
        return animals.getanimalbyspecies(animal.animal);
    }

    @CrossOrigin()
    @PostMapping("/getAnimalbyId/{id}")
    public ArrayList animal_id(@PathVariable Integer id) throws SQLException{
        return animals.getanimalbyid(id);
    }


    @CrossOrigin()
    @PostMapping("/otherPets")
    public ArrayList otherPets() throws SQLException{
        return animals.getotherPets();
    }

    String CreateSessionKey(){
        String alphabet= "abcdefghijklmonpqrstuvwxyz0123456789!@#$%^&*(){}[]?.";
        String sessionKey ="";
        Random random = new Random();
        int random_int = 12 + random.nextInt(9);
        for(int i =0; i < random_int; i++){
            char c = alphabet.charAt(random.nextInt(26));
            sessionKey+=c;
        }
        return sessionKey;
    }

    @CrossOrigin()
    @PostMapping("/FosterSignup")
    public  UserSignupCred FosterParentSignUp (@RequestBody signupcred user) throws SQLException{
        String sessionKey = CreateSessionKey();
        return foster.FosterParent_signup(user.first_name, user.last_name, user.email, user.city, user.county, user.home_address,
                user.username, user.password_hash, sessionKey);
    }

    @CrossOrigin()
    @PostMapping("/FosterLogin")
    public UserSignupCred FosterLogin (@RequestBody UserLoginCred user) throws SQLException{
        String sessionKey = CreateSessionKey();
        return foster.FosterParent_login(user.username, user.password_hash, sessionKey);
    }

    @CrossOrigin()
    @PostMapping("/FosterLogOut/{id}")
    public boolean FosterLogout(@PathVariable Integer id)throws SQLException{
        return foster.FosterParent_logout(id);
    }
}
