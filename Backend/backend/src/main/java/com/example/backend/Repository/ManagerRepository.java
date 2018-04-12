package com.example.backend.Repository;

import java.sql.*;
import java.util.ArrayList;
import java.util.HashMap;

import com.example.backend.controllers.ManagerCred;
import org.mindrot.jbcrypt.BCrypt;

public class ManagerRepository {
    private static String salt = "$2a$10$n8bYXVib6.SmjQPJRazwk.";

    public String hash(String password) {
        String pw = BCrypt.hashpw(password, salt);
        return pw;
    }

    public void insert_manager(String username, String password, String sessionKey){
        try {
            Connection conn = JDBCConnect.getDatabase();
            PreparedStatement preparedStatement = conn.prepareStatement("INSERT INTO manager (first_name, last_name, username, password_hash, email, sessionKey) VALUES(?, " +
                    "?, ?, ?, ?, ?)");
            preparedStatement.setString(1, "Valente");
            preparedStatement.setString(2, "Alvarez");
            preparedStatement.setString(3, username);
            String passwordhash = hash(password);
            System.out.println(passwordhash);
            preparedStatement.setString(4, passwordhash);
            preparedStatement.setString(5, "valvarez@basecampcodingacademy.org");
            preparedStatement.setString(6, sessionKey);
            System.out.println("success");
            preparedStatement.execute();
            preparedStatement.close();
        }catch(SQLException e){
            System.out.println(e.getMessage());
        }
    }

    public boolean Manager_logout(Integer id) throws SQLException {
        Connection conn = JDBCConnect.getDatabase();
        PreparedStatement preparedStatement = conn.prepareStatement(
                "UPDATE manager SET sessionKey = null WHERE id = ? RETURNING *"
        );
        preparedStatement.setInt(1, id);
        return preparedStatement.execute();
    }
    public boolean Delete_application(Integer id) throws SQLException {
        Connection conn = JDBCConnect.getDatabase();
        PreparedStatement preparedStatement = conn.prepareStatement(
                "DELETE FROM application where id =?"
        );
        preparedStatement.setInt(1, id);
        return preparedStatement.execute();
    }
    public ArrayList getapplicants() throws SQLException {
        Connection conn = JDBCConnect.getDatabase();
        PreparedStatement preparedStatement = conn.prepareStatement("SELECT * from application");
        ResultSet resultSet = preparedStatement.executeQuery();
        ArrayList Applicants = new ArrayList();
        while (resultSet.next()) {
            HashMap applicant = new HashMap();
            applicant.put("id", resultSet.getInt("id"));
            applicant.put("first_name", resultSet.getString("first_name"));
            applicant.put("last_name", resultSet.getString("last_name"));
            applicant.put("age", resultSet.getInt("age"));
            applicant.put("email", resultSet.getString("email"));
            applicant.put("animal_adopting_id", resultSet.getInt("animal_adopting_id"));
            applicant.put("city", resultSet.getString("city"));
            applicant.put("county", resultSet.getString("county"));
            applicant.put("home_address", resultSet.getString("home_address"));
            applicant.put("ownership_status", resultSet.getString("ownership_status"));
            applicant.put("amount_pets_own", resultSet.getInt("amount_pets_own"));
            applicant.put("amount_pets_own_past", resultSet.getInt("amount_pets_own_past"));
            applicant.put("animal_living_with_you", resultSet.getBoolean("animal_living_with_you"));
            applicant.put("inside_outside", resultSet.getString("inside_outside"));
            applicant.put("kept_during_day", resultSet.getString("kept_during_day"));
            applicant.put("kept_at_night", resultSet.getString("kept_at_night"));
            applicant.put("surrender_animals_at_us", resultSet.getBoolean("surrender_animals_at_us"));
            applicant.put("adopted_from_us_before", resultSet.getBoolean("adopted_from_us_before"));
            applicant.put("current_veterinarian_name", resultSet.getString("current_veterinarian_name"));
            applicant.put("if_no_vet_name_vet_planing", resultSet.getString("if_no_vet_name_vet_planing"));
            applicant.put("saw_pet_first", resultSet.getString("saw_pet_first"));

            Applicants.add(applicant);
        }
        preparedStatement.close();
        return Applicants;
    }
    public ManagerCred login(String username, String password, String sessionKey) throws SQLException {
        Connection conn = JDBCConnect.getDatabase();
        PreparedStatement preparedStatement = conn.prepareStatement("UPDATE manager SET sessionKey = ? WHERE username = ? and password_hash = ? returning *");
        preparedStatement.setString(1, sessionKey);
        preparedStatement.setString(2, username);
        preparedStatement.setString(3, hash(password));
        ResultSet resultSet = preparedStatement.executeQuery();
        resultSet.next();
        conn.close();
        return new ManagerCred(resultSet.getInt("id"),
                resultSet.getString("first_name"),
                resultSet.getString("last_name"),
                resultSet.getString("email"),
                resultSet.getString("sessionKey"));

    }
    public boolean Insert_applicant(String first_name, String last_name, Integer age, String email,
                                    Integer animal_id, String city, String county, String home_address, String ownership_status,
                                    Integer amount_pets_own, Integer amount_pets_own_past, Boolean animal_living_with_you,
                                    String inside_outside, String kept_during_day, String kept_at_night, Boolean surrender_animals_at_us,
                                    Boolean adopted_from_us_before, String current_veterinarian_name, String if_no_vet_name_vet_planing,
                                    String saw_pet_first) throws SQLException {

        Connection conn = JDBCConnect.getDatabase();
        PreparedStatement preparedStatement = conn.prepareStatement("INSERT INTO application(first_name, last_name, age, email, " +
                "animal_adopting_id, city, county, home_address, ownership_status, amount_pets_own, amount_pets_own_past, animal_living_with_you, " +
                "inside_outside, kept_during_day, kept_at_night, surrender_animals_at_us, adopted_from_us_before, current_veterinarian_name, " +
                "if_no_vet_name_vet_planing, saw_pet_first) Values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
        preparedStatement.setString(1, first_name);
        preparedStatement.setString(2, last_name);
        preparedStatement.setInt(3, age);
        preparedStatement.setString(4, email);
        preparedStatement.setInt(5, animal_id);
        preparedStatement.setString(6, city);
        preparedStatement.setString(7, county);
        preparedStatement.setString(8, home_address);
        preparedStatement.setString(9, ownership_status);
        preparedStatement.setInt(10, amount_pets_own);
        preparedStatement.setInt(11, amount_pets_own_past);
        preparedStatement.setBoolean(12, animal_living_with_you);
        preparedStatement.setString(13, inside_outside);
        preparedStatement.setString(14, kept_during_day);
        preparedStatement.setString(15, kept_at_night);
        preparedStatement.setBoolean(16, surrender_animals_at_us);
        preparedStatement.setBoolean(17, adopted_from_us_before);
        preparedStatement.setString(18, current_veterinarian_name);
        preparedStatement.setString(19, if_no_vet_name_vet_planing);
        preparedStatement.setString(20, saw_pet_first);
        preparedStatement.executeUpdate();
        preparedStatement.close();
        return true;
    }
    public Boolean Insert_animal(String species, String breed, String name, String male_female,
                              Integer age_year, Integer age_month, Integer age_week, String size,
                              String color, Date intake_date, String location, Boolean houseTrained,
                              Boolean declawed, Boolean spayed_or_neutured) throws SQLException {
        System.out.println(spayed_or_neutured);
        Connection conn = JDBCConnect.getDatabase();
        PreparedStatement preparedStatement = conn.prepareStatement("INSERT INTO animals(species, breed, name, male_female," +
                "age_year, age_month, age_week, size, color, intake_date, location, houseTrained, declawed, spayed_or_neutured) Values(" +
                "?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
        preparedStatement.setString(1, species);
        preparedStatement.setString(2, breed);
        preparedStatement.setString(3, name);
        preparedStatement.setString(4, male_female);
        preparedStatement.setInt(5, age_year);
        preparedStatement.setInt(6, age_month);
        preparedStatement.setInt(7, age_week);
        preparedStatement.setString(8, size);
        preparedStatement.setString(9, color);
        preparedStatement.setDate(10, intake_date);
        preparedStatement.setString(11, location);
        preparedStatement.setBoolean(12, houseTrained);
        preparedStatement.setBoolean(13, declawed);
        preparedStatement.setBoolean(14, spayed_or_neutured);
        preparedStatement.executeUpdate();
        preparedStatement.close();
        return true;
    }
}

