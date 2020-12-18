import React, { Component } from "react";
import { Row } from "react-bootstrap";
import CardDataService from "../dataservices/CardDataService";
import { Redirect } from "react-router-dom";

const pokemon = require("pokemontcgsdk");
class PackComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rare: [],
      uncommon: [],
      common: [],
      pack: [],
      id: this.props.location.state.id,
      rendered: false,
      toCollection: false,
    };
    this.refreshCollection = this.refreshCollection.bind(this);
    this.openPack = this.openPack.bind(this);
  }

  componentDidMount() {
    this.refreshCollection();
    this.setState({
      rendered: false,
    });
  }

  toCollection() {
    this.setState({
      toCollection: true,
    });
  }

  refreshCollection() {
    pokemon.card.where({ setCode: "Base1", rarity: "Common" }).then((card) => {
      this.setState({
        common: card,
      });
    });

    pokemon.card
      .where({ setCode: "Base1", rarity: "Uncommon" })
      .then((card) => {
        this.setState({
          uncommon: card,
        });
      });

    pokemon.card.where({ setCode: "Base1", rarity: "Rare" }).then((card) => {
      this.setState({
        rare: card,
      });
    });
  }

  openPack() {
    let tempPack = [];
    let entity = {
      name: "",
      cardID: "",
      imageLink: "",
      userID: this.state.id,
    };

    var i = 0;
    for (i = 0; i < 6; i++) {
      let card = this.state.common[Math.floor(Math.random() * 38)];
      tempPack.push(card);
      entity.name = card.name;
      entity.cardID = card.id;
      entity.imageLink = card.imageUrl;
      CardDataService.createCard(entity);
    }
    for (i = 0; i < 3; i++) {
      let card = this.state.uncommon[Math.floor(Math.random() * 32)];
      tempPack.push(card);
      entity.name = card.name;
      entity.cardID = card.id;
      entity.imageLink = card.imageUrl;
      CardDataService.createCard(entity);
    }
    
      let card = this.state.rare[Math.floor(Math.random() * 32)];
      tempPack.push(card);
      entity.name = card.name;
      entity.cardID = card.id;
      entity.imageLink = card.imageUrl;
      CardDataService.createCard(entity);


    this.setState({
      pack: tempPack,
      rendered: true,
    });
  }

  render() {
    if (this.state.toCollection) {
      return (
        <Redirect
          to={{
            pathname: "/Collection",
            state: { id: this.state.id },
          }}
        />
      );
    }
    if (this.state.rendered) {
      return (
        <div className="container">
          <br />
          <Row>
            {" "}
            <button className="btn btn-success" onClick={() => this.openPack()}>
              Open pack
            </button>
            <button
              className="btn btn-info"
              onClick={() => this.toCollection()}
            >
              Back to collection
            </button>
          </Row>

          <br></br>

          <Row>
            <img src={this.state.pack[0].imageUrl} alt=""></img>
            <img src={this.state.pack[1].imageUrl} alt=""></img>
            <img src={this.state.pack[2].imageUrl} alt=""></img>
          </Row>
          <Row>
            <img src={this.state.pack[3].imageUrl} alt=""></img>
            <img src={this.state.pack[4].imageUrl} alt=""></img>
            <img src={this.state.pack[5].imageUrl} alt=""></img>
          </Row>
          <Row>
            <img src={this.state.pack[6].imageUrl} alt=""></img>
            <img src={this.state.pack[7].imageUrl} alt=""></img>
            <img src={this.state.pack[8].imageUrl} alt=""></img>
          </Row>
          <Row>
            <img src={this.state.pack[9].imageUrl} alt=""></img>
          </Row>
        </div>
      );
    }
    return (
      <div className="container">
        <br />
        <Row>
          {" "}
          <button className="btn btn-success" onClick={() => this.openPack()}>
            Open pack
          </button>
          <button className="btn btn-info" onClick={() => this.toCollection()}>
            Back to collection
          </button>
        </Row>

        <br></br>
      </div>
    );
  }
}

export default PackComponent;
