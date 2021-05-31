import React, {useEffect, useState} from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';


export default function CharactertList (){
    const [CharacterList, GetCharacterList] = useState([]);

    useEffect(() => {
       axios
        .get('https://rickandmortyapi.com/api/character/')
        .then(response => {
            console.log('hola',response.data.results);
            GetCharacterList(response.data.results);
        })
        .catch(err => {
            console.log(err)
        });
    }, [])

    return(
        <div>
            {CharacterList.map((chars, id) => {
                return <CharacterCard key={id} chars={chars} />
            })}
        </div>
    )
}