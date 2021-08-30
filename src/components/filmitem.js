import React from 'react';

const FilmItem = ({url, children}) => {



    return (

        <>
            <li>
                <a href={url} target="_blank" title="View details on IMDB">{children}</a>
            </li>
        </>
    )
}

export default FilmItem;