package com.example.backend.Repository;

import java.sql.*;

public class JDBCConnect {
    public static Connection getDatabase() throws SQLException {
        return DriverManager.getConnection("jdbc:postgresql:Humane_Society_db", "basecamp", "localpassword");

    }
}
