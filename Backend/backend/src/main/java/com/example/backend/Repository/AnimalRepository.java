package com.example.backend.Repository;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

public class AnimalRepository {

    public void getanimalbyspecies(String animal) throws SQLException {
        Connection conn = JDBCConnect.getDatabase();
        PreparedStatement preparedStatement = conn.prepareStatement("SELECT * from animals WHERE species = ? ");
        preparedStatement.setString(1, animal);
        ResultSet resultSet = preparedStatement.executeQuery();
        while(resultSet.next()){

        }
    }

    public void getotherPets() throws SQLException {
        Connection conn = JDBCConnect.getDatabase();
        PreparedStatement preparedStatement = conn.prepareStatement("SELECT * from animals Where not(species = 'dog' or species = 'cat')");
        ResultSet resultSet = preparedStatement.executeQuery();
        while (resultSet.next()){

        }
    }
}
