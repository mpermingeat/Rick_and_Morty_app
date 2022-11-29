import Card from "../card/Card";

export default function Cards(props) {
  const { characters } = props;
  return (
    <div>
      {characters.map((character, props) => (
        <Card
          name={character.name}
          species={character.species}
          gender={character.gender}
          image={character.image}
          //onClick={props.onClose}
        />
      ))}
    </div>
  );
}
