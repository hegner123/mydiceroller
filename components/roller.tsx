import * as rpgDiceRoller from "@dice-roller/rpg-dice-roller";
import { useEffect, useState } from "react";
import {
  withAdvantage,
  withDisadvantage,
  rollResult,
} from "mydiceroller/store/atoms";
import { DiceRoll } from "mydiceroller/types/diceRoll";
import { useAtom } from "jotai";

const Roller = ({ col }: { col: string }) => {
  const [result, setResult] = useState([]);
  const [dice, setDice] = useState("1d20");
  const [hasAdvantage] = useAtom(withAdvantage);
  const [hasDisadvantage] = useAtom(withDisadvantage);
  const [, setRollResult] = useAtom(rollResult);

  function returnAdvantage(a: number, b: number) {
    return (a - b) * -1;
  }
  function returnDisadvantage(a: number, b: number) {
    return a - b;
  }

  const rollDice = (advantage: boolean, disadvantage: boolean) => {
    const roller = new rpgDiceRoller.DiceRoller();
    if (!advantage && !disadvantage) {
      let res = roller.roll(dice).total;
      setResult(res);
      return;
    }
    if (advantage || disadvantage) {
      let res1 = roller.roll(dice).total;
      let res2 = roller.roll(dice).total;
      if (advantage) {
        setResult([res1, res2].sort(returnAdvantage));
      }
      if (disadvantage) {
        setResult([res1, res2].sort(returnDisadvantage));
      }
      return;
    }
  };

  useEffect(() => {
    if (result.length === 0) return;
    setRollResult(result);
  }, [result, setRollResult]);
  return (
    <>
      <button
        className={`bg-slate-500 p-5 col-start-${col}`}
        onClick={(e) => rollDice(hasAdvantage, hasDisadvantage)}>
        Roll
      </button>
    </>
  );
};

export default Roller;
