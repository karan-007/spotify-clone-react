import React from 'react'
import './NavOption.css'

function NavOption({ title, Icon }) {
    // console.log(title)
    return (

        <div className="navOption">
            {Icon && <Icon className="icon" />}
            {Icon ? <h4>{title}</h4> : <p>{title}</p>}
        </div>
    )
}

export default NavOption
