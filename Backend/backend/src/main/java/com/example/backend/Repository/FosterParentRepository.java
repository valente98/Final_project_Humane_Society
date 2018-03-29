package com.example.backend.Repository;

import org.mindrot.jbcrypt.BCrypt;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class FosterParentRepository {
    private static String salt = "$2a$10$n8bYXVib6.SmjQPJRazwk.";

    public String hash(String password) {
        String pw = BCrypt.hashpw(password, salt);
        return pw;
    }

    public void FosterParent_signup(String first_name, String last_name, String email, String city, String county, String home_address,
                               Integer days, String username, String password_hash){
        try {
            Connection conn = JDBCConnect.getDatabase();
            PreparedStatement preparedStatement = conn.prepareStatement("INSERT INTO foster_care (first_name, last_name," +
                    "email, city, county, home_address, days, username, password_hash) " +
                    "VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)");
            preparedStatement.setString(1, first_name);
            preparedStatement.setString(2, last_name);
            preparedStatement.setString(3, email);
            preparedStatement.setString(4, city);
            preparedStatement.setString(5, county);
            preparedStatement.setString(6, home_address);
            preparedStatement.setInt(7, days);
            preparedStatement.setString(8, username);
            String passwordhash = hash(password_hash);
            preparedStatement.setString(9, passwordhash);
            preparedStatement.execute();
            preparedStatement.close();
            System.out.println("success");
        }catch(SQLException e){
            System.out.println(e.getMessage());
        }
    }

    public Boolean FosterParent_login(String username, String password) throws SQLException{
            Connection conn = JDBCConnect.getDatabase();
            PreparedStatement preparedStatement = conn.prepareStatement("SELECT * from foster_care WHERE username = ? ");
            preparedStatement.setString(1, username);
            ResultSet resultSet = preparedStatement.executeQuery();
            while (resultSet.next()) {
                String hashpassword = resultSet.getString("password_hash");
                if (hash(password).equals(hashpassword)) {
                    return true;
                }
            }
            preparedStatement.close();
            return false;
    }
}
