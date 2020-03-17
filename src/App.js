import React from 'react';
import { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import CatInfo from './CatInfo/CatInfo';

class App extends Component {

  state = {
    cats: [
      {id: 1, name: "Emma", breed: "Domestic Short Hair", place: "Medford"},
      {id: 2, name: "Max", breed: "Maine Coon", place: "Jamaica Plain"},
      {id: 3, name: "Sterling", breed: "Siamese", place: "Westford"},
      {id: 4, name: "Joey", breed: "Bengal", place: "Manchester"},
      {id: 5, name: "Cocoa", breed: "Abyssinian", place: "Bolton"}
    ],
    other_cats: 'whatever',
    showperson:false
  }
  changebreed = (updatedBreed) => {
    this.setState({
      cats:[
        {name:"Emma",breed:updatedBreed, place:"Medford"},
        {name:"Max", breed:"Maine Coon", place:"Jamaica Plain"},
        {name:"Sterling", breed:"Siamese", place:"Westford"},
        {name:"Joey", breed:"Bengal", place:"Manchester"},
        {name:"Cocoa", breed:"Abyssinian", place:"Bolton"}
      ]
    })
  }

  deleteCat = (catIndex) => {
    const cats = [...this.state.cats];
    cats.splice(catIndex, 1);
    this.setState({cats:cats})
  }

  bindingBreed = (event, id) => {
    const catIndex = this.state.cats.findIndex(c => {
      return c.id === id
    });
    const cat = {...this.state.cats[catIndex]};
    cat.breed = event.target.value;
    const cats = [...this.state.cats];
    cats[catIndex] = cat;

    this.setState({
      cats:cats
    })
  }


  render() {
    const style = {
      backgroungColor: 'lightblue',
      font:'inherit',

      border:'1px solid rgb(19, 150, 235)',
      padding:'10px'
    };

    let catinfo = null;

    if (this.state.cats) {

      catinfo = (
        (
          <div>
            {this.state.cats.map((cat, index) => {
              return <CatInfo name={cat.name}
                      place={cat.place}
                      breed={cat.breed}
                      key={cat.id}
                      click={()=>this.deleteCat(index)}
                      change={(event)=>{this.bindingBreed(event, cat.id)}}/>
            })}
          </div>
        )
      )

    } else {
      catinfo = null
    }

    let classes = [];   

    return (

      <div className="App">
        <h1>Cat Shelter</h1>
        <p className={classes.join(' ')}>a sweet home to adopt kitty</p>
        
        { this.state.cats ?
          <div>
            <button style={style} onClick={()=>this.changebreed('other breed')}>change breed</button>
          </div> : null
        }
        {catinfo}

      </div>
    );
  }
  
}

export default App;
