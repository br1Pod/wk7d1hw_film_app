import React from 'react';
import FilmItem from './FilmItem';

const FilmList = ({films}) => {

    const filmNodes = films.map(film => {
        return(
            <FilmItem url={film.url} key={film.id}>{film.name}</FilmItem>
        )
    })

    return (

        <>
            <h2>Film List</h2>
            <ul>
            {filmNodes}
            </ul>
        </>

    )
}

export default FilmList;