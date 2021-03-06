package com.example.backend.controllers;

import com.example.backend.Repository.ManagerRepository;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Random;

@RestController
public class ManagerControler {
    ManagerRepository manager = new ManagerRepository();
    @CrossOrigin()
    @PostMapping("/insertManager")
    public void insert_manager(@RequestBody UserLoginCred cred)throws SQLException{
        String sessionKey= CreateSessionKey();
        manager.insert_manager(cred.username, cred.password_hash, sessionKey);
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
    @PostMapping("/getApplicant")
    public ArrayList getApplicant() throws SQLException {
        return manager.getapplicants();
    }
    @CrossOrigin()
    @PostMapping("/FosterApproved")
    public boolean FosterApproved(@RequestBody FosterApprovalCred foster) throws SQLException{
        return manager.Fosterapproved(foster.user_id, foster.animal_id);
    }
    @CrossOrigin()
    @PostMapping("/FosterDisapproved/{id}")
    public boolean FosterDisapproved(@PathVariable Integer id) throws SQLException{
        return manager.FosterDisapproved(id);
    }
    @CrossOrigin()
    @PostMapping("/getFosterApproval")
    public ArrayList getFosterApproval() throws SQLException {
        return manager.getFosterApproval();
    }
        @CrossOrigin()
    @PostMapping("/insertApplicant")
    public Boolean insert_applicant(@RequestBody ApplicationCred applicant) throws SQLException {
        return manager.Insert_applicant(applicant.first_name, applicant.last_name, applicant.age, applicant.email, applicant.animal_id, applicant.city,
                applicant.county, applicant.home_address, applicant.ownership_status, applicant.amount_pets_own, applicant.amount_pets_own_past,
                applicant.animal_living_with_you, applicant.inside_outside, applicant.kept_during_day, applicant.kept_at_night, applicant.surrender_animals_at_us,
                applicant.adopted_from_us_before, applicant.current_veterinarian_name, applicant.if_no_vet_name_vet_planing, applicant.saw_pet_first);
    }
    @CrossOrigin()
    @PostMapping("/managerLogin")
    public ManagerCred login(@RequestBody UserLoginCred cred) throws SQLException {
        String sessionKey= CreateSessionKey();
        return manager.login(cred.username, cred.password_hash, sessionKey);
    }

    @CrossOrigin()
    @PostMapping("/deleteApplicant/{id}")
    public boolean deleteApplicant(@PathVariable Integer id)throws SQLException{
        return manager.Delete_application(id);
    }

    @CrossOrigin()
    @PostMapping("/deleteApplicantsandPet/{id}")
    public boolean deleteApplicantsandPet(@PathVariable Integer id)throws SQLException{
        manager.Delete__pet_because_it_is_adopted(id);
        manager.Delete_Applicant_with_Same_adopting_pet(id);
        return  manager.Delete_Applicant_with_Same_adopting_pet(id);
    }

    @CrossOrigin()
    @PostMapping("/getFosterParents/{id}")
    public UserSignupCred getFosterParents(@PathVariable Integer id) throws SQLException{
        return manager.getFosterParents(id);
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