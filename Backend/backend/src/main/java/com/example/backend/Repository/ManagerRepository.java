package com.example.backend.Repository;

import java.sql.*;

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

