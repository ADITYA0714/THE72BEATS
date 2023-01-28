import "./consult.css";
import ConsultCards from "./ConsultCards";

import C1 from "./images/d1.webp";
import C2 from "./images/d2.jpg";
import C3 from "./images/d3.avif";

const cardImg = [C1, C2, C3];
const title = ["WHO"];
const buttonName = ["SPECIALITY"];

export default function Consult() {
    return (
        <div className="consultPage">
            <div className="topPage">
                <div className="form">
                    <div className="row1">
                        <div className="subForm">
                            <p>First Name</p>
                            <input
                                className="firstName formInput"
                                type="text"
                            />
                        </div>
                        <div className="subForm">
                            <p>Last Name</p>
                            <input className="lastName formInput" type="text" />
                        </div>
                        <div className="subForm">
                            <p> Date of Appointment</p>
                            <input className="date formInput" type="date" />
                        </div>
                    </div>
                    <div className="row2">
                        <div className="subForm">
                            <p>City</p>
                            <input className="cityName formInput" type="text" />
                        </div>
                        <div className="subForm">
                            <p>State</p>
                            <select
                                className="choose formInput"
                                name="state"
                                id=""
                            >
                                <option value="">Choose...</option>
                            </select>
                        </div>
                        <div className="subForm">
                            <p>Problem</p>
                            <input className="problem formInput" type="text" />
                        </div>
                    </div>
                    <div className="lastRow">
                        <input type="checkbox" />
                        <span>&nbsp;Agree to Terms and Conditions</span>
                        <br />
                        <button className="formBtn">Book Apointment</button>
                    </div>
                </div>
            </div>
            <div className="bottomPage">
                <h2 className="bottomPageHeading">Our Doctors</h2>
                <div className="bottomCardRow">
                    <div className="consultCard">
                        <ConsultCards
                            images={cardImg[0]}
                            title={title[0]}
                            buttonName={buttonName[0]}
                        />
                    </div>
                    <div className="consultCard">
                        <ConsultCards
                            images={cardImg[1]}
                            title={title[0]}
                            buttonName={buttonName[0]}
                        />
                    </div>
                    <div className="consultCard">
                        <ConsultCards
                            images={cardImg[2]}
                            title={title[0]}
                            buttonName={buttonName[0]}
                        />
                    </div>
                    <div className="consultCard">
                        <ConsultCards
                            images={cardImg[2]}
                            title={title[0]}
                            buttonName={buttonName[0]}
                        />
                    </div>
                </div>
                <div className="bottomCardRow">
                    <div className="consultCard">
                        <ConsultCards
                            images={cardImg[0]}
                            title={title[0]}
                            buttonName={buttonName[0]}
                        />
                    </div>
                    <div className="consultCard">
                        <ConsultCards
                            images={cardImg[0]}
                            title={title[0]}
                            buttonName={buttonName[0]}
                        />
                    </div>
                    <div className="consultCard">
                        <ConsultCards
                            images={cardImg[1]}
                            title={title[0]}
                            buttonName={buttonName[0]}
                        />
                    </div>
                    <div className="consultCard">
                        <ConsultCards
                            images={cardImg[2]}
                            title={title[0]}
                            buttonName={buttonName[0]}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
