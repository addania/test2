import React from "react";

export class DimMenu extends React.Component {

  constructor(props){
    super(props);
    this.getKeys = this.getKeys.bind(this);
    this.addSelected = this.addSelected.bind(this);
    this.add = this.add.bind(this);
    this.addEasy = this.addEasy.bind(this);
    this.state = {selected: [1, 2], selected2: [], selected3: [6,8,10], selected4: [1,3]};
    }
    
    getKeys = function(){
      return Object.keys(this.props.data[0])
   
    }

    addSelected = function(word){
      return this.state.selected.push(word)

    }

    add = function(item){
      const array= this.state.selected3;
      console.log(array);
      const newArray= array.push(item);
      console.log(newArray);
      this.setState( (state) => {
        return
        {selected3: state}
      })
      
    }

    addEasy = function (sth){
      const array= this.state.selected4;
      console.log("My empty array is: " + array);
      console.log("My state is: " + this.state.selected4);
      array.push(sth);
      return console.log("My full array is: " + array);

    }

  render () {
    console.log(this.state);
  return (
    <div>
      <h1>HELLO {this.state.selected}</h1>
    <ul>
       {this.getKeys().map( (dim, index) => {
         return <li key={index}><button onClick={this.addSelected(3)}>{dim}</button></li>
       }


       )}
    </ul>

    <h1>HELLO {this.state.selected2}</h1>
    <ul>
       {this.getKeys().map( (dim, index) => {
         return <li key={index}><button onClick={()=>this.setState({selected2: "4444"})}>{dim}</button></li>
       }


       )}
    </ul>

    <h1>HELLO {this.state.selected3}</h1>
    <ul>
       {this.getKeys().map( (dim, index) => {
         return <li key={index}><button onClick={()=>this.add("5")}>{dim}</button></li>
       }


       )}
    </ul>

    <h1>HELLO {this.state.selected4}</h1>
    <ul>
       {this.getKeys().map( (dim, index) => {
         return <li key={index}><button onClick={()=>this.addEasy("event")}>{dim}</button></li>
       }


       )}
    </ul>


    </div>
    )
  }
}


