import React from "react"
import { HeaderComponent } from "../components/header.js";
import "../styles/global.css";
import { Carousel } from "../components/carousel.js";

// import vid from "https://player.vimeo.com/video/364168176";

export default () => (
  <div>
    <h1>Carousel TEST!</h1>
    <HeaderComponent title="CHANGED TEXT"/>
    <Carousel />
    <video  controls>
    <source src="https://clips.vorwaerts-gmbh.de/VfE_html5.mp4" type="video/mp4">
    </source>
    </video>
    <video  controls>
    <source src="https://player.vimeo.com/video/364168176" type="video/mp4">
    </source>
    </video>
    <iframe src="https://player.vimeo.com/video/364168176" width="640" height="564" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
</div>)
