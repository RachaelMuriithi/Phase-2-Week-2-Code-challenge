import React, { useEffect, useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one
  const [bots, setBots] = useState([])
  const [army, setArmy] = useState([])
  useEffect(() => {
    fetch("http://localhost:8002/bots")
      .then(response => response.json())
      .then(data => {
        setBots(data)
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
  function removeFromArmy(bot){
    setArmy(army.filter(b => b !== bot));
  }
   function handleRemove(bot){
     //remove from army
    fetch(`http://localhost:8002/bots/${bot.id}`,{
       method: "DELETE",
    })
    .then(res => res.json())
    .then(() => {

    setArmy(army.filter(b => b !== bot));
    setBots(bots.filter(b => b !== bot));
    })
  }

  return (
    <div>
      <YourBotArmy bots={army} handleClick={removeFromArmy} />
      <BotCollection bots={bots} handleClick={handleClick} handleRemove={handleRemove}/>
    </div>
  )
}

export default BotsPage;