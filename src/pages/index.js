import React from "react"
import { HeaderComponent } from "../components/header.js";
import "../styles/global.css";
import { Carousel } from "../components/carousel.js";
import { Table } from "../components/table.js";
import Data from "../data/data.json";
import { DimMenu } from "../components/dim_menu.js";

// import vid from "https://player.vimeo.com/video/364168176";

const core =[
  {"fruit": "Apple", "cost": 100},
  {"fruit": "Orange", "cost": 50},
  {"fruit": "Banana", "cost": 35},
  {"fruit": "Mango", "cost": 75},
  {"fruit": "Pineappple", "cost": 27},
  {"fruit": "Papaya", "cost": 42},
  {"fruit": "Watermelon", "cost": 62}
  ];

const core2 =
[
  {'Name': 'Abc', 'Age': 15, 'Location': 'Bangalore'},
  {'Name': 'Def', 'Age': 43, 'Location': 'Mumbai'},
  {'Name': 'Uff', 'Age': 30, 'Location': 'Chennai'},
  {'Name': 'Ammse', 'Age': 87, 'Location': 'Delhi'},
  {'Name': 'Yysse', 'Age': 28, 'Location': 'Hyderabad'}
]

const core3 = Data;

export default () => (
  <div>
    <h1>Table TEST!</h1>
    <Table data={core}/>
    <Table data={core2}/>
    <Table data={core3}/>
    <DimMenu data={core3}/>
   </div>
   )
