package com.example.backend.controllers;

import com.example.backend.Repository.ManagerRepository;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;
import java.util.Random;

@RestController
public class ManagerControler {
    ManagerRepository manager = new ManagerRepository();
    @CrossOrigin()
    @PostMapping("/insertManager")
    public void inset_manager(@RequestBody Credentials cred)throws SQLException{
        String sessionKey= CreateSessionKey();
        manager.insert_manager(cred.username, cred.password, sessionKey);
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
    @PostMapping("/managerLogin")
    public ManagerCred login(@RequestBody Credentials cred) throws SQLException {
        String sessionKey= CreateSessionKey();
        return manager.login(cred.username, cred.password, sessionKey);
    }

    @CrossOrigin()
    @PostMapping("/managerLogOut/{id}")
    public boolean managerLogOut(@PathVariable Integer id)throws SQLException{
        return manager.Manager_logout(id);
    }

    @CrossOrigin()
    @PostMapping("/insertAnimal")
    public Boolean insertAnimal(@RequestBody Animals animal) throws SQLException{
         return manager.Insert_animal(animal.species, animal.breed, animal.name, animal.male_female, animal.age_year, animal.age_month,
                 animal.age_week, animal.size, animal.color, animal.date, animal.location, animal.houseTrained, animal.declawed, animal.spayed_or_neutured);
    }
}