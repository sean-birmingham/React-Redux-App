import React from "react";
import { Card } from "./Movie"

const Character = ({ character }) => {
    return (
        <Card>
            <h2>{character.name}</h2>
            <p>Age: {character.age}</p>
            <p>Gender: {character.gender}</p>
            <p>Hair Color: {character.hair_color}</p>
        </Card>
    )
}

export default Character;