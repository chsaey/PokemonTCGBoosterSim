import React, { Component } from "react";
import CardService from "../dataservices/CardDataService";
import { Redirect } from "react-router-dom";

class CollectionComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardCollection: [],
      //userID:this.props.location.state.id,
      userID: 1,
      renderPack: false,
    };
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

  render() {
    console.log(this.state.cardCollection);
    if (this.state.renderCards) {
      return (
        <Redirect
          to={{
            pathname: "/cardSet",
            state: { id: this.state.setID },
          }}
        />
      );
    }
    return (
      <div className="container">
        <div className="row">
          <br />
          <button className="btn btn-info">Open pack</button>
        </div>
        <h1 style={{ textAlign: "center" }}>Collection</h1>
        <br></br>
        <div>
            <row>
          {this.state.cardCollection
            .filter((card) => card.userID === this.state.userID)
            .map((card) => (
              <img src={card.imageLink}></img>
            ))}
            </row>
        </div>
      </div>
    );
  }
}

export default CollectionComponent;
