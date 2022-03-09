import React from 'react';
import './GoogleMeetSquare.css'

export default function GoogleMeetSquare({name, isMuted}) {

    const [mute, setMute] = React.useState(false);

    function changeMute() {
        setMute(!mute);
        console.log(isMuted);
    }
    
    return(
        <div id= "meetSquare">
            <div>{name}</div>
            <div>{mute===true?"Unmute":"Mute"}</div>
            <div>{isMuted===true?"Yes":"No"}</div>
            <button onClick={changeMute}>{mute===true?"Unmute":"Mute"}</button>
        </div>    
    )
}
