import React from "react";
import "./table.css";

const core =[
  {"fruit": "Apple", "cost": 100},
  {"fruit": "Orange", "cost": 50},
  {"fruit": "Banana", "cost": 35},
  {"fruit": "Mango", "cost": 75},
  {"fruit": "Pineappple", "cost": 27},
  {"fruit": "Papaya", "cost": 42},
  {"fruit": "Watermelon", "cost": 62}
  ]

  const RenderRow = (props) =>{
    return props.keys.map((key, index) => {
      return <td key={props.data[key]}>{props.data[key]}</td>
    }
   
    )
   }

export class Table extends React.Component {

  constructor(props){
    super(props);
    this.getHeader = this.getHeader.bind(this);
    this.getRowsData = this.getRowsData.bind(this);
    this.getKeys = this.getKeys.bind(this);
    }
    
    getKeys = function(){
      console.log(Object.keys(this.props.data[0]));
      return Object.keys(this.props.data[0])
   
    }
    
    getHeader = function(){
      var keys = this.getKeys();
      return keys.map((key, index) => {
        return <th key={key}>{key.toUpperCase()}</th>
      }
      )
    
    }
    
    getRowsData = function(){
      var keys=this.getKeys();
      var items=this.props.data;
      return items.map((row, index)=> {
      return <tr key={index}><RenderRow key={index} keys={keys} data={row} /></tr>
      })
    }

  render () {
  return (
    <div>
    <h1 style={{display: 'flex',  justifyContent:'center', alignItems:'center', color: "gray"}}>Zolo</h1>
    
    <h1 style={{display: 'flex',  justifyContent:'center', alignItems:'center', color: "gray"}}>{core[0].fruit}</h1>
    <h1 style={{display: 'flex',  justifyContent:'center', alignItems:'center', color: "gray"}}>{core[0].cost}</h1>

    <h1 style={{display: 'flex',  justifyContent:'center', alignItems:'center', color: "gray"}}>{core[0]["fruit"]}</h1>
    <h1 style={{display: 'flex',  justifyContent:'center', alignItems:'center', color: "gray"}}>{core[0]["cost"]}</h1>

    <h1 style={{display: 'flex',  justifyContent:'center', alignItems:'center', color: "gray"}}>{this.getKeys()}</h1>
    <h1 style={{display: 'flex',  justifyContent:'center', alignItems:'center', color: "gray"}}>{this.getKeys()[0]}</h1>
    <h1 style={{display: 'flex',  justifyContent:'center', alignItems:'center', color: "gray"}}>{this.getKeys()[1]}</h1>
    <div>
 <table id="table">
 <thead>
 <tr>{this.getHeader()}</tr>
 </thead>
 <tbody>
 {this.getRowsData()}
 </tbody>
 </table>
 </div>
    </div>
    )
  }
}


