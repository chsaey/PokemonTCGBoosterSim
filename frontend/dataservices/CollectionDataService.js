import axios from 'axios'

class CollectionDataService {

    retrieveAllCollections() {
        return axios.get('http://localhost:8080/retrieveAllCollections')
    }

    findCollectionById(id) {
        return axios.get(`http://localhost:8080/findCollectionById/${id}`)
    }

    deleteCollection(id) {
        return axios.delete(`http://localhost:8080/deleteCollection/${id}`)
    }

    updateCollection(collection) {
        return axios.put('http://localhost:8080/updateCollection/', collection)
    }

    createCollection(collection) {
        return axios.post('http://localhost:8080/addCollection/', collection)
    }
}

export default new CollectionDataService();