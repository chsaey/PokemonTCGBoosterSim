package com.example.demo.entity;

import javax.persistence.*;
import java.util.Set;

@Entity //This will let Java know that this is an entity that we are going to map to a database table.
@Table(name = "users") //This is for the actual name of the database table we are mapping to the class.
public class User {

    @Id //This will map the primary key.
    @GeneratedValue(strategy = GenerationType.IDENTITY) //This will auto increment your primary key
    @Column(name = "id") //This is mapping the primary key to the id column in the table.
    private int id;

    @Column(name = "user_name")
    private String userName;

    @Column(name = "password")
    private String password;

    @OneToMany(mappedBy = "user")
    private Set<CardCollection> cardCollections;

    //default constructor
    public User() {
    }

    //para constructor
    public User(String userName, String password) {
        this.userName = userName;
        this.password = password;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }


    @Override
    public String toString() {
        return "user{" +
                "id=" + id +
                ", userName='" + userName + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
