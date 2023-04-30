import { APIReference } from "mydiceroller/types/spell";
import { useState, useEffect } from "react";

const useSrdSpells = () => {
  const [spell, setSpells] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  function fetchSpell(index: string) {
    fetch(`https://www.dnd5eapi.co/api/spells/${index}`)
      .then((response) => response.json())
      .then((data) => {
        setSpells(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }

  function fetchSpellList(spellList: APIReference[]) {
    let spells = [];
    spellList.forEach((spell: APIReference) => {
      fetchSpell(spell.index);
      spells.push(spell);
    });
  }

  return { spell, loading, error, fetchSpell, fetchSpellList };
};

export { useSrdSpells };
