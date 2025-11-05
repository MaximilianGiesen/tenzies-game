import React from 'react';

export default function Die(props) {

    return(
        <button className={props.isHeld ? "activated" : null}>{props.value}</button>
    )
}