import React, { Component } from "react";
import CardService from "../dataservices/CardDataService";
import { Redirect } from "react-router-dom";

class CollectionComponent extends Component {
  constructor(props) {
    super(props);   
    this.state = {
      cardCollection: [],
      id:this.props.location.state.id,
      renderPack: false,
    };

    this.refreshCollection = this.refreshCollection.bind(this)
    this.toBooster = this.toBooster.bind(this)

  }

  componentDidMount() {
    this.refreshCollection();
  }

  refreshCollection() {
    CardService.retrieveAllCards().then((response) => {
      this.setState({
        cardCollection: response.data,
      });
    });
  }
  
  toBooster(){
    this.setState({
      renderPack: true
    })

  }

  render() {
    if (this.state.renderPack) {
      return (
        <Redirect
          to={{
            pathname: "/Boosterpack",
            state: { id: this.state.id },
          }}
        />
      );
    }

    
    return (
      <div className="container">
        <div className="row">
          <br />
          <button className="btn btn-warning"onClick={() => this.toBooster()}>Get more cards</button>
        </div>
        <h1 style={{ textAlign: "center" }}>Collection</h1>
        <br></br>
        <div>
            <row>
          {this.state.cardCollection
            .filter((card) => card.userID === this.state.id)
            .map((card) => (
              <img src={card.imageLink} alt={"broken"}></img>
            ))}
            </row>
        </div>
      </div>
    );
  }
}

export default CollectionComponent;
