import { useState } from "react";

const Operation = ({
  id,
  label,
  col,
}: {
  id: string;
  label: string;
  col: string;
}) => {
  const [operation, setOperation] = useState("");
  return (
    <>
      <div className={`grid max-w-xs col-start-${col}`}>
        <label htmlFor={id} className="col-span-full text-lg">
          {label}
        </label>
        <select
          name="operator"
          id="modifier-operator"
          className="p-5 text-black col-span-full">
          <option value="add">+</option>
          <option value="subtract">-</option>
          <option value="multiply">*</option>
          <option value="divide">/</option>
        </select>
      </div>
    </>
  );
};

export default Operation;
