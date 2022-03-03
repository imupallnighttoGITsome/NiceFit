// import { useState } from "react";
import OutfitDetail from "../../pages/OutfitDetail/OutfitDetail";
import { Outfits } from "../../../data/seeddata";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./OutfitList.css";

const OutfitList = (props) => {
  return (
    <div className="posts">
      {Outfits.map((outfit) => (
        <Card className="outfit-container">
          <img className="outfit-pic" src={outfit.img} alt="post" />
          <h5>{outfit.userName}</h5>
          <div className="item-detail-button">
            <Link to={`/nicefit/${outfit.id}`}>'Fit Deets</Link>
          </div>
        </Card>
      ))}
      <OutfitDetail key={props.id} id={props.id} />
    </div>
  );
};

export default OutfitList;
