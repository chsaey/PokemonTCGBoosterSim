package com.example.demo.dao;

import com.example.demo.entity.CardCollection;
import com.example.demo.entity.User;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
public class CardCollectionIMPL implements MyDAO{

    //Define field for entity manager
    /*The EntityManager API is used to create and remove persistent entity instances,
        to find entities by their primary key, and to query over entities. */
    private final EntityManager entityManager;

    //Set up constructor injection
    @Autowired
    public CardCollectionIMPL(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    @Override
    @Transactional //Defines the scope of a single database transaction.
    public List<Object> fetchAll() {
        Session currentSession = entityManager.unwrap(Session.class);
        Query<Object> myQuery = currentSession.createQuery("from CardCollection");
        return myQuery.getResultList();
    }

    @Override
    @Transactional //Defines the scope of a single database transaction.
    public Object fetchById(int theId) {
        Session currentSession = entityManager.unwrap(Session.class);
        return currentSession.get(CardCollection.class, theId);
    }

    @Override
    @Transactional //Defines the scope of a single database transaction.
    public void save(Object collection) {
        Session currentSession = entityManager.unwrap(Session.class);
        currentSession.saveOrUpdate(collection);
    }

    @Override
    @Transactional //Defines the scope of a single database transaction.
    public void deleteById(int theId) {
        Session currentSession = entityManager.unwrap(Session.class);
        User myUser = currentSession.get(User.class, theId);
        currentSession.delete(myUser);
    }
}
