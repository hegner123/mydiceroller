import { useState, useMemo } from "react";
import PropType from "prop-types";
import { useAtom, atom } from "jotai";

const Selector = ({
  id,
  label,
  col,
}: {
  id: string;
  label: string;
  col: string;
}) => {
  const [selected, setSelected] = useState("");
  const valueAtom = useMemo(() => atom(selected), [selected]);

  const max = 20;
  return (
    <div className={`grid max-w-xs col-start-${col}`}>
      <label htmlFor={id} className="col-span-full text-lg">
        {label}
      </label>
      <select
        name="die-selector"
        id={id}
        onChange={(e) => setSelected(e.target.value)}
        className="p-5 text-black col-span-full">
        {Array.from(Array(max).keys()).map((i) => (
          <option key={i} value={i}>
            {i}
          </option>
        ))}
      </select>
    </div>
  );
};

Selector.propTypes = {
  id: PropType.string.isRequired,
};

export default Selector;
