import { useState } from "react";
import { useAtom } from "jotai";
import {
  withAdvantage,
  withDisadvantage,
  criticalRoll,
} from "mydiceroller/store/atoms";
const RollOptions = ({
  id,
  label,
  col,
}: {
  id: string;
  label: string;
  col: string;
}) => {
  const [hasAdvantage, setHasAdvantage] = useAtom(withAdvantage);
  const [hasDisadvantage, setHasDisadvantage] = useAtom(withDisadvantage);
  const [hasCriticalRoll, setHasCriticalRoll] = useAtom(criticalRoll);
  function clearOptions() {
    setHasAdvantage(false);
    setHasDisadvantage(false);
    setHasCriticalRoll(false);
  }
  function enableAdvantage() {
    setHasAdvantage(true);
    setHasDisadvantage(false);
    setHasCriticalRoll(false);
  }
  function enableDisadvantage() {
    setHasAdvantage(false);
    setHasDisadvantage(true);
    setHasCriticalRoll(false);
  }
  function enableCriticalRoll() {
    setHasCriticalRoll(true);
    setHasAdvantage(false);
    setHasDisadvantage(false);
  }
  return (
    <div className={`col-start-${col} grid grid-cols-2`}>
      <label htmlFor="none">Flat</label>
      <input
        type="radio"
        id="none"
        name="roll-options"
        checked
        onChange={() => clearOptions()}
      />
      <label htmlFor="advantage">Critical</label>
      <input
        type="radio"
        id="critical"
        name="roll-options"
        onChange={() => enableCriticalRoll()}
      />
      <label htmlFor="advantage">Advantage</label>
      <input
        type="radio"
        id="advantage"
        name="roll-options"
        onChange={() => enableAdvantage()}
      />

      <label htmlFor="disadvantage">Disadvantage</label>
      <input
        type="radio"
        id="disadvantage"
        name="roll-options"
        onChange={() => enableDisadvantage()}
      />
    </div>
  );
};

export default RollOptions;
