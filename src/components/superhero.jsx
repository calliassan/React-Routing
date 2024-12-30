import { useState } from "react";

export const Superhero = ({ namesofheroes }) => {
  const [ischecked, setischecked] = useState(false);
  const handlechange = () => {
    setischecked(!ischecked);
  };
  return (
    <div>
      <input type="checkbox" checked={ischecked} onChange={handlechange} />
      {namesofheroes.map((heroes) =>
        ischecked ? <h1 key={heroes.id}>{heroes.name}</h1> : false
      )}
    </div>
  );
};
