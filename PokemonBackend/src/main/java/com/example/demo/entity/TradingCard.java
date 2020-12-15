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
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler",""})
public class TradingCard {

    @Id //This will map the primary key.
    @GeneratedValue(strategy = GenerationType.IDENTITY) //This will auto increment your primary key
    @Column(name = "id") //This is mapping the primary key to the id column in the table.
    private int id;

    @Column(name = "name")
    private String question;

    @Column(name = "card_id")
    private String answer;

    @Column(name = "image_link")
    private String imageLink;

    @ManyToOne(fetch = FetchType.LAZY, optional = false) // Many flashcards can belong to one set
    @OnDelete(action = OnDeleteAction.CASCADE) // One a set is deleted, cards of the set are also deleted
    @JoinColumn(name = "collection_id", nullable = false) // foreign key, column to join on
    @JsonIgnore// hide field from parser
    private CardCollection cardCollection;

    public TradingCard() {

    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getQuestion() {
        return question;
    }

    public void setQuestion(String question) {
        this.question = question;
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

    public CardCollection getCollection() {
        return cardCollection;
    }

    public void setCollection(CardCollection cardCollection) {
        this.cardCollection = cardCollection;
    }




}
