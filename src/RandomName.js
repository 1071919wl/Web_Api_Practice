import React, {Component} from 'react';
import Clicker from './Clicker'


// let Randomizer= function(){
//     return Math.floor(Math.random() * 10) + 1
// }


class RandomName extends Component {
  constructor(props){
    super(props)
    this.state={
      items: {},
      isLoaded: false,
    }
  }

  componentDidMount() {
    fetch(`https://swapi.py4e.com/api/people/${Clicker}`)
    .then(response => response.json())
    .then(json => {
      this.setState({
        isLoaded: true,
        items: json,
      })
    });
  }

  render(){
    var {isLoaded, items} = this.state;

    if(!isLoaded){
      return <div>Loading...</div>;
    }

    else{
      return (
        <div className='RandomName'>
        <ul>
          <b>Name:</b> {items.name}
            <li>
              Height: {items.height}
            </li>
            <li>
              Mass: {items.mass}
            </li>
            <li>
              Hair Color: {items.hair_color}
            </li>
            <li>
              Skin Color: {items.skin_color}
            </li>
            <li>
              Eye Color: {items.eye_color}
            </li>
            <li>
              Birth Year: {items.birth_year}
            </li>
            <li>
              Gender: {items.gender}
            </li>
          <b>URL:</b> {items.url}
        </ul>
        </div>
      )
    }
  }
}

export default RandomName;

// fetch('https://jsonplaceholder.typicode.com/users')
// .then(response => response.json())
// .then(data => console.log(data));
//
//
// fetch('https://swapi.py4e.com/api/people/')
// .then(response => response.json())
// .then(data => console.log(data.results));

// Learned from youtube
// https://www.youtube.com/watch?v=hzLDsxPGctY
