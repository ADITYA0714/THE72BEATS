import React from "react";

const Cards = ({ images, title, buttonName }) => {
    return (
        <main className="cards">
            <div className="eventCard">
                <img src={images} alt="eventImage" style={{ width: "100%" }} />
                <p className="eventTitle">Hackathon</p>
                <h1>{title} </h1>
                <p>Harvard University</p>
                <button className="consultButton">{buttonName}</button>
            </div>
        </main>
    );
};

export default Cards;
