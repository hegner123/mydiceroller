import { useEffect, useState } from "react";

const useSrdClass = () => {
  const [classSpells, setClassSpells] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  function fetchClasses() {
    fetch("https://www.dnd5eapi.co/api/classes/bard/spells")
      .then((response) => response.json())
      .then((data) => {
        setClassSpells(data.results);
      })
      .catch((error) => {
        setError(error);
      });
  }

  useEffect(() => {
    fetchClasses();
  }, []);

  return { classSpells, loading, error };
};

export { useSrdClass };
