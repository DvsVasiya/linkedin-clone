// import { FiberManualRecord, Info } from "@material-ui/icons";
import React from "react";
import "./Widgets.css";
import { FiberManualRecord, Info } from "@mui/icons-material";

function Widgets() {
  const newsArticle = (heading, subtitle) => {
    return (
      <div className="widgets__article">
        <div className="widgets__articleLeft">
          <FiberManualRecord className="MuiSvgIcon-root" />
        </div>
        <div className="widgets__articleRight">
          <h4>{heading}</h4>
          <p>{subtitle}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>Linkedin News</h2>
        <Info />
      </div>
      {newsArticle("React is good", "top news")}
      {newsArticle("Angular is next one", "tageted angular")}
      {newsArticle("node is also in list", "node can have few month")}
      {newsArticle("does aiming towards everying in js", "JS is targets")}
      {newsArticle("or maybe anythings else", "what in mind")}
      {newsArticle("go toward fullstack", "full Stark")}
    </div>
  );
}

export default Widgets;
