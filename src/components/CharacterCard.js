import React from 'react';


export default function CharacterCard(props){
    return (
        <>
            <h1>Name:{props.chars.name}</h1>
            <img src={props.chars.image} alt="CharacterPhoto"></img>
            <h2>{props.chars.gender}</h2>
            <h2>{props.chars.status}</h2>
        </>
    )   
}
