package com.example.backend.Repository;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

public class AnimalRepository {

    public ArrayList getanimalbyspecies(String animal) throws SQLException {
        System.out.println(animal);
        Connection conn = JDBCConnect.getDatabase();
        PreparedStatement preparedStatement = conn.prepareStatement("SELECT * from animals WHERE species = ? ");
        preparedStatement.setString(1, animal);
        ResultSet resultSet = preparedStatement.executeQuery();
        ArrayList allAnimal = new ArrayList();
        while(resultSet.next()){
            HashMap animals = new HashMap();
            animals.put("id", resultSet.getString("id"));
            animals.put("species", resultSet.getString("species"));
            animals.put("breed", resultSet.getString("breed"));
            animals.put("name", resultSet.getString("name"));
            animals.put("male_female", resultSet.getString("male_female"));
            animals.put("age_year", resultSet.getString("age_year"));
            animals.put("age_month", resultSet.getString("age_month"));
            animals.put("age_week", resultSet.getString("age_week"));
            animals.put("size", resultSet.getString("size"));
            animals.put("color", resultSet.getString("color"));
            animals.put("intake_date", resultSet.getString("intake_date"));
            animals.put("location", resultSet.getString("location"));
            animals.put("houseTrained", resultSet.getString("houseTrained"));
            animals.put("declawed", resultSet.getString("declawed"));
            animals.put("spayed_or_neutured", resultSet.getString("spayed_or_neutured"));
            allAnimal.add(animals);
        }
        System.out.println(allAnimal);
        preparedStatement.close();
        return allAnimal;
    }

    public void getotherPets() throws SQLException {
        Connection conn = JDBCConnect.getDatabase();
        PreparedStatement preparedStatement = conn.prepareStatement("SELECT * from animals Where not(species = 'dog' or species = 'cat')");
        ResultSet resultSet = preparedStatement.executeQuery();
        while (resultSet.next()){

        }
    }
}
