import React from 'react'
import "./styles.css"

function Hotel(props) {
    return <div>
        <div className="hotel">
            <img className="hotel__image" src={props.image}></img>
            <div className="hotel__info">
                <h4 className="info__name">{props.name}</h4>
                <p className="info__reviews">Reviews: {props.reviews}</p>
                <p className="info__score">Score: {props.score}</p>
            </div>
        </div>
    </div>
}

export default Hotel