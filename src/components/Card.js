import React from 'react'
import '../style/Card.css'
import PlayCircleFilledRoundedIcon from '@material-ui/icons/PlayCircleFilledRounded';

function Card({ name, data, img, artist, onClick }) {
    // {Icon ? <h4>{title}</h4> : <p>{title}</p>}
    return (
        <div className="card-alpha" onClick={onClick}>
            <div className="card-data">
                <div className="card-icon">
                    <PlayCircleFilledRoundedIcon fontSize="large" />
                </div>
                <img src={img} alt="img" />
                <div className="cardInfo">
                    <h6>{name}</h6>
                    {artist ?
                        <span>
                            {artist.map((d) => d.name).join(", ")}
                        </span> :
                        <span>{data}</span>
                    }

                </div>
            </div>
        </div>
    )
}

export default Card
