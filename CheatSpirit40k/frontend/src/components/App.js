import React, { Component } from "react";
import { render } from "react-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loaded: false,
      placeholder: "Loading"
    };
  }

  componentDidMount() {
    fetch("api/units")
      .then(response => {
        if (response.status > 400) {
          return this.setState(() => {
            return { placeholder: "Something went wrong!" };
          });
        }
        return response.json();
      })
      .then(data => {
        this.setState(() => {
          return {
            data,
            loaded: true
          };
        });
      });
  }

  render() {
    return (
      <ul>
        {this.state.data.map(unit => {
          return (
            <li key={unit.id}>
              <p>Name : {unit.Name}</p>
			  <p>Move: {unit.Move}</p>
			  <p>WS: {unit.WS}</p>
			  <p>BS: {unit.BS}</p>
			  <p>Strength: {unit.Strength}</p>
			  <p>Toughness: {unit.Toughness}</p>
			  <p>Wounds: {unit.Wounds}</p>
			  <p>Attack: {unit.Attack}</p>
			  <p>Leadership: {unit.Leadership}</p>
			  <p>Armor: {unit.Armor}</p>
			  <p>Invulnerable save: {unit.Inv}</p>
			  <p>Feel No Pain: {unit.FNP}</p>
			  <p>Type: {unit.Type}</p>
			  <p>Faction: {unit.Faction}</p>
			  <p>Warlord: {unit.Warlord}</p>
			  <p>Points: {unit.Points}</p>
			  <p>Min: {unit.Min}</p>
			  <p>Max: {unit.Max}</p>
			  
			  
			  
            </li>
          );
        })}
      </ul>
    );
  }
}

export default App;

const container = document.getElementById("app");
render(<App />, container);