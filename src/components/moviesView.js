import React from 'react';


const MoviesView = (props) => {
    return (
        <div>
            {props.list.map( movie => 
                <div>
                    {movie.name}
                </div>
                )}
        </div>
    );
}


export default MoviesView;