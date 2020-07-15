import React, { Component } from 'react'
import Pokedex from "./Pokedex";
import "./Pokecard.css";

const PokeAPI = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

export default class Pokecard extends Component {
    render() {
        let imgSrc = `${PokeAPI}${this.props.id}.png`
        return (
            <div className="Pokecard">
                <h1 className="Pokecard-title">{this.props.name}</h1>
                <div className="Pokecard-image">
                    <img src={imgSrc} alt="Pokemon"/>
                </div>
                <p className="Pokecard-data">Type: {this.props.type}</p>
                <p className="Pokecard-data">Exp: {this.props.exp}</p>
            </div>
        )
    }
}
