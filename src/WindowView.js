import React, {Component} from 'react';


class WindowView extends Component {
  constructor(props){
    super(props)
    this.state={
      items: [],
      isLoaded: false,
    }
  }

  componentDidMount() {
    fetch('https://swapi.py4e.com/api/people/')
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
        <div className='WindowView'>
        <ol>
        {items.results.map(item => (
          <li key={item.name}>
          <b>Name:</b> {item.name}
          </li>
        ))}
        </ol>
        </div>
      )
    }
  }
}
export default WindowView;

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
