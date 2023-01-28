import React from "react";
import Button from "./Button";

import { Link } from "react-router-dom";

const Home = () => {
    return (
        <main className="homePage">
            <section id="home">
                <h1 id="title">
                    WE MADE YOUR MEDICAL <br /> TREATMENT EASY
                </h1>
                <p id="para">
                    Start an instant consultation within 2 minutes or do video
                    consultation <br /> at the scheduled time.
                </p>

                <div className="option">
                    <Link to={"/organization"}>
                        <Button buttonText={"Organization"} />
                    </Link>
                    &emsp;
                    <Link to={"/patient"}>
                        <Button buttonText={"Patient"} />
                    </Link>
                    &emsp;
                    <Link to={"/doctor"}>
                        <Button buttonText={"Doctor"} />
                    </Link>
                </div>
            </section>
        </main>
    );
};

export default Home;
