import React from 'react'
import '../style/Card.css'
import PlayCircleFilledRoundedIcon from '@material-ui/icons/PlayCircleFilledRounded';

function Card({ name, data, img, icon, artist, onClick }) {
    return (
        <div className="card-alpha">
            <div className="card-data">
                <div className="card-icon">
                    <PlayCircleFilledRoundedIcon fontSize="large" />
                </div>
                <img src={img} alt="img"   onClick={onClick}/>
                <div className="cardInfo">
                    <h6>{name}</h6>
                    {artist ?
                        <span>
                            {artist.map((d) => d.name).join(", ")}
                        </span> :
                        <span>{data}</span>
                    }
                    {icon}
                </div>
            </div>
        </div>
    )
}

export default Card
