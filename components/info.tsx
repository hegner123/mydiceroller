import { useState, useEffect } from "react";
import { useSrdClass } from "mydiceroller/hooks/class";
import { useSrdSpells } from "mydiceroller/hooks/spells";
import { APIReference } from "mydiceroller/types/spell";
const Info = () => {
  const {
    classSpells,
    loading: classLoading,
    error: classError,
  } = useSrdClass();
  const {
    spell,
    loading: spellLoading,
    error: spellError,
    fetchSpell,
    fetchSpellList,
  } = useSrdSpells();
  const [selectedSpell, setSelectedSpell] = useState("");

  useEffect(() => {
    console.log(classError);
  }, [classError]);

  useEffect(() => {
    console.log(spellError);
  }, [spellError]);

  useEffect(() => {
    if (selectedSpell) {
      fetchSpell(selectedSpell);
    }
  }, [selectedSpell]);

  return (
    <div className="grid col-span-full grid-cols-12 auto-rows-min">
      <div className="col-span-4 spell-list">
        <h3 className="col-span-full text-2xl">Info</h3>
        {classLoading && <p>Loading classes...</p>}
        {classError && <p>Error loading classes...</p>}
        {classSpells &&
          classSpells.map((spell: APIReference) => (
            <p
              key={spell.index}
              onClick={() => setSelectedSpell(spell.index)}
              className="cursor-pointer hover:underline col-start-1 col-end-2">
              {spell.name}
            </p>
          ))}
      </div>
      {selectedSpell && (
        <div className="row-start-2 row-span-full col-start-5 col-span-4">
          <h2 className="mb-5 text-5xl">{spell.name}</h2>
          {spellLoading && <p>Loading spell...</p>}
          {spell && (
            <div>
              <p className="mb-5">Spell Level: {spell.level}</p>
              <p>{spell.desc}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Info;
