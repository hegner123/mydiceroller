import { useState } from "react";
import { useAtom } from "jotai";
import { rollModifier } from "mydiceroller/store/atoms";

const Modifier = ({
  id,
  label,
  col,
}: {
  id: string;
  label: string;
  col: string;
}) => {
  const [modifier, setModifier] = useAtom(rollModifier);
  return (
    <>
      <div className={`col-start-${col}`}>
        <label htmlFor={id} className="col-span-full text-lg">
          {label}
        </label>
        <input
          type="text"
          value={modifier}
          onChange={(e) => setModifier(e.target.value)}
          className="p-5 text-black col-span-full"
        />
      </div>
    </>
  );
};

export default Modifier;
