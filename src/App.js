import React from "react";
import GoogleMeetSquare from "./GoogleMeetSquare";

let participants = [
    {
        name: 'Vikas',
        isMuted: false
    },
    {
        name: 'Chandramani',
        isMuted: true
    },
    {
        name: 'Divyansh',
        isMuted: false
    },
    {
        name: 'Chinmay',
        isMuted: true
    }
]

export default function App() {

    function makeSquare (participant) {
        return(
            <GoogleMeetSquare name={participant.name} isMuted={participant.isMuted} />
        )
    }

    return(
            participants.map(makeSquare)
    )
}