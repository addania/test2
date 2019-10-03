import React from "react"
import { HeaderComponent } from "../components/header.js";
import "../styles/global.css";
import vid from "https://player.vimeo.com/video/364168176";

export default () => (
  <div>
    <h1>OMFG IT WORKS!!!!!!!!!!!!!!! YOU ROCK!!!!!</h1>
    <HeaderComponent title="RANDOM TEXT"/>
    <video  controls>
    <source src="https://clips.vorwaerts-gmbh.de/VfE_html5.mp4" type="video/mp4">
    </source>
    </video>
    <video  controls>
    <source src={vid} type="video/mp4">
    </source>
    </video>
 </div>)
