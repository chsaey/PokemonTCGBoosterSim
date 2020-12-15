import axios from 'axios'

class CardDataService {

    retrieveAllCards() {
        return axios.get('http://localhost:8080/retrieveAllCards')
    }

    findCardById(id) {
        return axios.get(`http://localhost:8080/findCardById/${id}`)
    }
    
    deleteCard(id) {
        return axios.delete(`http://localhost:8080/deleteCard/${id}`)
    }

    updateCard(card) {
        return axios.put('http://localhost:8080/updateCard/', card)
    }

    createCard(card) {
        return axios.post('http://localhost:8080/addCard/', card)
    }
}

export default new CardDataService();