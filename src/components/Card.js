import React from 'react'
import './Card.css'
import PlayCircleFilledRoundedIcon from '@material-ui/icons/PlayCircleFilledRounded';

function Card({ name, data, img, artist, onClick }) {
    // {Icon ? <h4>{title}</h4> : <p>{title}</p>}
    return (
        <div className="card" onClick={onClick}>
            <div className="card-data">
                <div className="card-icon">
                    <PlayCircleFilledRoundedIcon fontSize="large" />
                </div>
                <img src={img} alt="sfd" />
                <div className="cardInfo">
                    <h4>{name}</h4>
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
