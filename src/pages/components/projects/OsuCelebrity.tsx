import * as React from "react";
import BaseProject from "./BaseProject";

export default {
  name: "osu!Celebrity",
  subtitle: "Fully-automated Twitch stream",
  startDate: "August, 2015",
  endDate: "March, 2016",
  source: "https://github.com/OsuCelebrity/OsuCelebrity",
  thumbnail: require("Assets/img/projects/osucelebrity/logo.png"),
  feature: require("Assets/img/projects/osucelebrity/feature.png"),
  images: [
    require("Assets/img/projects/osucelebrity/twitch.jpg"),
    require("Assets/img/projects/osucelebrity/preview.jpg"),
  ],
  colour: "#E963A1",
  backgroundColour: {
    background: "linear-gradient(0deg, #E963A1, #e963c8)"
  },
  featureBackground: require("Assets/img/projects/osucelebrity/bg-shape.svg"),
  languages: [
    "Java", "Javascript"
  ],
  services: "User Interface Design, Automated Stream Development",
  web: false,
  appType: "Twitch",
  body: <>
    osu!Celebrity was an automated Twitch stream for the popular game <a href="//osu.ppy.sh/">osu!</a>. This stream allowed players to queue up for their 30 seconds of fame, in which they would be able to play osu! in front of thousands of viewers. In this time, viewers could vote on whether they wanted to see more of this player, or move on to the next one. In just a few weeks we grew to 500+ daily viewers, peaking over 2,000 viewers on some days. The back-end system was built in Java, but utilises a Javascript and HTML front-end to overlay the game client.
  </>,
  anchor: "osucelebrity",
  small: true,
  darkSubtitle: true
} as BaseProject;
