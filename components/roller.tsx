import * as rpgDiceRoller from "@dice-roller/rpg-dice-roller";
import { useEffect, useState } from "react";
import { atom, useAtom } from "jotai";

const Roller = ({ col }: { col: string }) => {
  const [result, setResult] = useState("");
  const [dice, setDice] = useState("1d20");

  const rollDice = () => {
    const roller = new rpgDiceRoller.DiceRoller();
    const roll = roller.roll(dice);
    setResult(roll.toString());
  };

  useEffect(() => {
    if (result === "") return;
    console.log(result);
  }, [result]);
  return (
    <>
      <button
        className={`bg-slate-500 p-5 col-start-${col}`}
        onClick={(e) => rollDice()}>
        Roll
      </button>
    </>
  );
};

export default Roller;