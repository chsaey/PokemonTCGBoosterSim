package com.example.demo.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;


//Flashcard Entity
@Entity //This will let Java know that this is an entity that we are going to map to a database table.
@Table(name = "trading_cards") //This is for the actual name of the database table we are mapping to the class.
// When using lazy loading, we can tell Jackson to ignore helpful garbage hibernate adds to classes
//Fixes the issues of serializing entities to/from the DB
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler", ""})
public class TradingCard {

    @Id //This will map the primary key.
    @GeneratedValue(strategy = GenerationType.IDENTITY) //This will auto increment your primary key
    @Column(name = "id") //This is mapping the primary key to the id column in the table.
    private int id;

    @Column(name = "name")
    private String name;

    @Column(name = "card_id")
    private String answer;

    @Column(name = "image_link")
    private String imageLink;

    //Many to one -> A user can have many sets of flash cards
    //Lazy fetchType meaning initialization is deferred as long as possible.
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @OnDelete(action = OnDeleteAction.CASCADE)    // If a user is deleted, all sets belonging to them are also deleted.
    @JoinColumn(name = "user_id", nullable = false)
    // creates the column on which they join on, the foreign key. can't be null
    @JsonIgnore // ignore field when serializing
    private User user;

    // supposedly allows us to input an integer rather then a user entity when creating a card set entitytt
    @Column(name = "user_id", updatable = false, insertable = false)
    private int userID;

    public TradingCard() {

    }
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAnswer() {
        return answer;
    }

    public void setAnswer(String answer) {
        this.answer = answer;
    }

    public String getImageLink() {
        return imageLink;
    }

    public void setImageLink(String imageLink) {
        this.imageLink = imageLink;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public int getUserID() {
        return userID;
    }

    public void setUserID(int userID) {
        this.userID = userID;
    }

}
