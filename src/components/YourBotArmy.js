import React from "react";
import BotCard from "./BotCard"

function YourBotArmy({ bots, handleClick}) {
  //your bot army code here...

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
        {
            bots.map((bot, key) => {
              return <BotCard bot={bot} handleClick={handleClick} from={"army"} />
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
