import React from "react";
import { Link } from "react-router-dom";
import "./patient.css";

const Patient = () => {
    return (
        <div className="patientContainer">
            <Link
                className="patientPgBtn"
                to={"/consult"}
                style={{ textDecoration: "none" }}
            >
                <div class="patientContainer_Left">
                    <button className="btn btn_Left">Consult Doctor</button>
                </div>
            </Link>
            <Link
                className="patientPgBtn"
                to={"/medicines"}
                style={{ textDecoration: "none" }}
            >
                <div class="patientContainer_Right">
                    <button className="btn btn_Right">
                        Alternate Medicine
                    </button>
                </div>
            </Link>
        </div>
    );
};

export default Patient;
