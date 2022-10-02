import React from "react";
import BotCard from "./BotCard"

function BotCollection({bots, handleClick, handleRemove}) {
  // Your code here

  return (
    <div className="ui four column grid">
      <div className="row">
        {
          bots.map((bot,key) => {
            return <BotCard bot = {bot} handleClick = {handleClick} from={"collection"} handleRemove={handleRemove}/> 
          })
        }
      </div>
    </div>
  );
}

export default BotCollection;