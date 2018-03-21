package com.example.backend.Repository;

import java.sql.*;
import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Value;


public class ManagerRepository {
    @Value("${app.salt}")
    private String salt;

    public String hash(String password) {
        String pw = BCrypt.hashpw(password, salt);
        System.out.println(pw);
        return pw;
    }

    public Boolean login(String username, String password) throws SQLException {
        Connection conn = JDBCConnect.getDatabase();
        PreparedStatement preparedStatement = conn.prepareStatement("SELECT * from manager WHERE username = ? ");
        preparedStatement.setString(1, username);
        ResultSet resultSet = preparedStatement.executeQuery();
        while (resultSet.next()) {
            String hashpassword = resultSet.getString("password_hash");
            if (hash(password).equals(hashpassword)) {
                return true;
            }
        }
        return false;
    }
}

