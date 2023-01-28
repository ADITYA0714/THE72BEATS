import React from "react";
import Cards from "./Cards";

import img1 from "./images/img1.jpeg";
import img2 from "./images/img2.jpeg";
import img3 from "./images/img3.jpeg";
import img4 from "./images/img4.jpeg";
import img5 from "./images/img5.jpeg";
import img6 from "./images/img6.jpeg";
import img7 from "./images/img7.jpeg";
import img8 from "./images/img8.jpeg";
import img9 from "./images/img9.jpeg";
import img10 from "./images/img10.jpeg";
import img11 from "./images/img11.jpeg";
const img = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
];
const title = [
    "WHO",
    "AIIMS",
    "IGIMS",
    "FORTIS",
    "WHO",
    "AIIMS",
    "IGIMS",
    "FORTIS",
    "WHO",
    "AIIMS",
    "IGIMS",
    "FORTIS",
];
const university = ["Organizer"];
const disease = [
    "Corona",
    "Infection",
    "Diagnosis",
    "Back Pain",
    "Migraine",
    "Awareness Program",
    "Surgery",
    "Heart Problem",
    "Relaxation",
    "Blood Pressure",
    "Checkups",
];
const buttonName = ["LIVE NOW", "REGISTER", "WATCH NOW"];

const Organization = () => {
    return (
        <main className="organizationPage">
            <h2 className="eventsHeading"> Live Events</h2>

            <div className="liveEvents">
                <Cards
                    images={img[0]}
                    title={title[0]}
                    university={university[0]}
                    disease={disease[0]}
                    buttonName={buttonName[0]}
                />
                <Cards
                    images={img[1]}
                    title={title[1]}
                    university={university[0]}
                    disease={disease[1]}
                    buttonName={buttonName[0]}
                />
                <Cards
                    images={img[2]}
                    title={title[2]}
                    disease={disease[2]}
                    buttonName={buttonName[0]}
                    university={university[0]}
                />
                <Cards
                    images={img[3]}
                    title={title[3]}
                    disease={disease[3]}
                    buttonName={buttonName[0]}
                    university={university[0]}
                />
            </div>
            <h2 className="eventsHeading">Upcoming Events</h2>

            <div className="upcomingEvents">
                <Cards
                    images={img[4]}
                    title={title[4]}
                    disease={disease[4]}
                    university={university[0]}
                    buttonName={buttonName[1]}
                />
                <Cards
                    images={img[5]}
                    title={title[5]}
                    disease={disease[5]}
                    university={university[0]}
                    buttonName={buttonName[1]}
                />
                <Cards
                    images={img[6]}
                    title={title[6]}
                    disease={disease[6]}
                    university={university[0]}
                    buttonName={buttonName[1]}
                />
                <Cards
                    images={img[7]}
                    title={title[7]}
                    disease={disease[7]}
                    university={university[0]}
                    buttonName={buttonName[1]}
                />
            </div>
            <h2 className="eventsHeading">Past Events</h2>
            <div className="pastEvents">
                <Cards
                    images={img[8]}
                    title={title[8]}
                    disease={disease[8]}
                    university={university[0]}
                    buttonName={buttonName[2]}
                />
                <Cards
                    images={img[9]}
                    title={title[9]}
                    disease={disease[9]}
                    university={university[0]}
                    buttonName={buttonName[2]}
                />
                <Cards
                    images={img[10]}
                    title={title[10]}
                    disease={disease[10]}
                    university={university[0]}
                    buttonName={buttonName[2]}
                />
            </div>
        </main>
    );
};

export default Organization;
