import React, { useEffect } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
 const [bots, setBots] = React.useState([]);
  //start here with your code for step one
  useEffect(() => {
    fetch("http://localhost:8002/bots")
    .then((res) => res.json())
    .then((data) => {
      setBots(data);
    })
}, [])
function handleClick(bot) {
  if (army.includes(bot)) {
    console.log("bot already exists")
    return 
  }
  const updatedArmy = [...army]
  updatedArmy.push(bot)
  setArmy(updatedArmy)

}
  return (
    <div>
      <YourBotArmy />
      <BotCollection bots = {bots} />
    </div>
  )
}

export default BotsPage;
