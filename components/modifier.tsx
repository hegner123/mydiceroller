import { useState } from "react";

const Modifier = ({
  id,
  label,
  col,
}: {
  id: string;
  label: string;
  col: string;
}) => {
  const [rollModifier, setRollModifier] = useState("0");
  return (
    <>
      <div className={`col-start-${col}`}>
        <label htmlFor={id} className="col-span-full text-lg">
          {label}
        </label>
        <input
          type="text"
          onChange={(e) => setRollModifier(e.target.value)}
          className="p-5 text-black col-span-full"
        />
      </div>
    </>
  );
};

export default Modifier;
