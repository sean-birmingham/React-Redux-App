import React from "react";
import { connect } from "react-redux";
import { Container } from "./MovieList";

import Character from "./Character";

const CharacterList = props => {
    return (
        <Container>
            {props.error ? (
                <div className="error">{props.error}</div>
            ) : (
                    props.characters.map(character => <Character key={character.id} character={character} />)
                )}
        </Container>
    )
}

const mapStateToProps = state => {
    return {
        characters: state.characters,
        error: state.error
    }
}

export default connect(mapStateToProps, {})(CharacterList);
