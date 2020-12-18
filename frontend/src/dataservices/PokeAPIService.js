const pokemon = require('pokemontcgsdk')

class PokeAPIService {

    retrieveBaseSet() {
        pokemon.card.where({setCode: 'Base1'})
        .then('data', cards => {

        })
    }
}

export default new PokeAPIService();