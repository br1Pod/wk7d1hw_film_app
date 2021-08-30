import React from 'react';
import FilmList from '../components/FilmList';

const FilmBox = () => {



    return (

        <>
        <h1>Upcoming Releases</h1>
        <FilmList/>
        <hr />
        <a href="https://www.imdb.com/calendar/?region=gb" target="_blank" title="View more upcoming releases on IMDB">View more upcoming releases</a>
        </>
    )

}


export default FilmBox;