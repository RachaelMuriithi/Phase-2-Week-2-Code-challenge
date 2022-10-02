import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots }) {
  // Your code here
  return (
    <div className="ui four column grid">
      <div className="row">
        {
        bots.map((bot, key) => {
          return <BotCard bot={bot} />;
          })
        }
      </div>
    </div>
  );
}

export default BotCollection;
