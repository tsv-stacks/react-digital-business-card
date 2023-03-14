import React from "react";
import profile from "../assets/the-simpsons-troy-mcclure.jpg"

export default function Titles(){
    return (
        <div className="title">
            <img className="profile-picture" src={profile} alt="profile picture" />
            <h1 className="centre">Tarndeep V</h1>
            <h4 className="centre my-title">Frontend Developer</h4>
        </div>
    )
}
