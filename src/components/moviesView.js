import React from 'react';


// React Bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const MoviesView = (props) => {
    return (
        <Col className="movie-view-col">
            {props.list.map( movie => 
                <Row className="movie-name-row">
                    {movie.name}
                </Row>
                )}
        </Col>
    );
}


export default MoviesView;