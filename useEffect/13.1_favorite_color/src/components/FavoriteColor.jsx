import React, { useState, useEffect } from 'react'

function FavoriteColor() {
    const [favoriteColor, setfavoriteColor] = useState("blue");
    useEffect(() => {
        setTimeout(() => {
            setfavoriteColor("red");
        }, 1000);

    }, []);
    return (
        <div>
            <h1 style={{ color: favoriteColor }} >My favorite color is {favoriteColor} </h1>
            <div id='empty-div'></div>
        </div>
    )
}

export default FavoriteColor