package com.example.backend.Repository;

import com.example.backend.controllers.UserSignupCred;
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

    public UserSignupCred FosterParent_signup(String first_name, String last_name, String email, String city, String county, String home_address,
                                              Integer days, String username, String password_hash, String sessionKey){
        try {
            Connection conn = JDBCConnect.getDatabase();
            PreparedStatement preparedStatement = conn.prepareStatement("INSERT INTO foster_care (first_name, last_name," +
                    "email, city, county, home_address, days, username, password_hash, sessionKey) " +
                    "VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?) Returning *");
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
            preparedStatement.setString(10,sessionKey);
            ResultSet resultSet = preparedStatement.executeQuery();
            resultSet.next();

            conn.close();
            return new UserSignupCred(resultSet.getInt("id"),
                    resultSet.getString("first_name"),
                    resultSet.getString("last_name"),
                    resultSet.getString("email"),
                    resultSet.getString("city"),
                    resultSet.getString("county"),
                    resultSet.getString("home_address"),
                    resultSet.getInt("days"),
                    resultSet.getString("username"),
                    resultSet.getString("password_hash"),
                    resultSet.getString("sessionKey"));

        }catch(SQLException e){
            System.out.println("error: ");
            System.out.println(e.getMessage());
            return null;
        }
    }

    public UserSignupCred FosterParent_login(String username, String password, String sessionKey) throws SQLException{
            Connection conn = JDBCConnect.getDatabase();
            PreparedStatement preparedStatement = conn.prepareStatement("UPDATE foster_care SET sessionKey = ? WHERE username = ? and password_hash = ? returning *");
            preparedStatement.setString(1, sessionKey);
            preparedStatement.setString(2, username);
            preparedStatement.setString(3, hash(password));
            ResultSet resultSet = preparedStatement.executeQuery();
            resultSet.next();
            conn.close();
            return new UserSignupCred(resultSet.getInt("id"),
                resultSet.getString("first_name"),
                resultSet.getString("last_name"),
                resultSet.getString("email"),
                resultSet.getString("city"),
                resultSet.getString("county"),
                resultSet.getString("home_address"),
                resultSet.getInt("days"),
                resultSet.getString("username"),
                resultSet.getString("password_hash"),
                resultSet.getString("sessionKey"));
    }

    public boolean FosterParent_logout(String sessionKey) throws SQLException{
        Connection conn = JDBCConnect.getDatabase();
        PreparedStatement preparedStatement = conn.prepareStatement(
                "UPDATE foster_care SET sessionKey = null WHERE sessionKey = ? RETURNING *"
        );
        preparedStatement.setString(1,sessionKey);
        return preparedStatement.execute();
    }
}
