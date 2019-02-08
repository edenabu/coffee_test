import React from 'react';
import coffee_1 from '../images/Results_CentralAmerica.png'
import coffee_2 from '../images/Results_Africa.png'
import coffee_3 from '../images/Results_Asia.png'
import coffee_4 from '../images/Results_SouthAmerica.png'

class Results extends React.Component{

  render(){
    const RESPONSES=[
      "Your selection brings us to Central America",
      "Your selection brings us to Africa",
      "Your selection brings us to Asia",
      "Your selection brings us to South America"
    ]
    const IMAGES = [coffee_1,coffee_2,coffee_3,coffee_4]
    const RANDO = Math.floor( Math.random() * RESPONSES.length )
    return(
      <div id="result">
        <h2>{ RESPONSES[RANDO] }</h2>
        <img src={IMAGES[RANDO]} width="200"/>
      </div>

    )
  }
}

export default Results;
