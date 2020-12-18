package com.example.demo.rest;
import com.example.demo.dao.MyDAO;
import com.example.demo.entity.TradingCard;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//This is to allow calls from React. CORS errors are dumb
@CrossOrigin(origins = { "http://localhost:3000"})
@RestController
public class TradingCardController {
    private final MyDAO myDAO;


    @Autowired
    public TradingCardController(@Qualifier("tradingCardIMPL") MyDAO myDAO) {
        this.myDAO = myDAO;
    }

    @GetMapping("/retrieveAllCards")
    public List<Object> findAll() {
        return myDAO.fetchAll();
    }

    @GetMapping("/findCardById/{Id}")
    public Object findCardById(@PathVariable int Id){
        return myDAO.fetchById(Id);
    }

    @PostMapping("/addCard")
    public TradingCard addCard(@RequestBody TradingCard card) {
        card.setId(0);
        myDAO.save(card);
        return card;
    }


    @PutMapping("/updateCard")
    public TradingCard updateCard(@RequestBody TradingCard card) {
        //this will execute an update instead of a create
        myDAO.save(card);
        return card;
    }

    @DeleteMapping("/deleteCard/{id}")
    public String deleteCard(@PathVariable int id) {

        TradingCard card = (TradingCard) myDAO.fetchById(id);

        if(card == null) {
            return "Card doesn't exist";
        }

        myDAO.deleteById(id);
        return "Deleted Card id : " + id;
    }
}
