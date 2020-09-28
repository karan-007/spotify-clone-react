import React from 'react'
import '../style/NavOption.css'

function NavOption({ title, Icon }) {
    // console.log(title)
    return (

        <div className="navOption">
            {Icon && <Icon className="icon" />}
            {Icon ? <h5>{title}</h5> : <p>{title}</p>}
        </div>
    )
}

export default NavOption
