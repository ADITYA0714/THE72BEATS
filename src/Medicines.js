import img1 from "./medicines/img1alt.jpeg";
import img2 from "./medicines/img2alt.jpeg";
import img3 from "./medicines/img3alt.jpeg";
import img4 from "./medicines/img4alt.jpeg";
import img5 from "./medicines/img5alt.jpeg";
import img6 from "./medicines/img6alt.jpeg";
import img7 from "./medicines/img7alt.jpeg";
import img8 from "./medicines/img8alt.jpeg";
import img9 from "./medicines/img9alt.jpeg";
import img10 from "./medicines/img1real.jpeg";
import img11 from "./medicines/img2real.jpeg";
import img12 from "./medicines/img3real.jpeg";
import img13 from "./medicines/img4real.jpeg";
import img14 from "./medicines/img5real.jpeg";
import img15 from "./medicines/img6real.jpeg";
import img16 from "./medicines/img7real.jpeg";
import img17 from "./medicines/img8real.jpeg";
import img18 from "./medicines/img9real.jpeg";
import "./medicines.css";
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
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
];

export default function Medicines() {
    return (
        <div className="medicines">
            <div className="row1">
                <div className="medicineContainer">
                    <div className="medicineContainerTop">
                        <img src={img[0]} alt="r1" className="containerImg" />
                        <img src={img[9]} alt="" className="containerImg" />
                    </div>
                    <div className="medicineContainerBottom">
                        <div className="upperHead">
                            <h3>Hydrotalcite</h3>
                            <h3>Nizatidine</h3>
                        </div>
                        <div className="lowerHead">
                            <h3>Disease-Acidity</h3>
                        </div>
                    </div>
                </div>
                <div className="medicineContainer">
                    <div className="medicineContainerTop">
                        <img src={img[1]} alt="r1" className="containerImg" />
                        <img src={img[10]} alt="" className="containerImg" />
                    </div>
                    <div className="medicineContainerBottom">
                        <div className="upperHead">
                            <h3>Cetirizine</h3>
                            <h3>Diphenhydramine</h3>
                        </div>
                        <div className="lowerHead">
                            <h3>Disease-Allergy</h3>
                        </div>
                    </div>
                </div>
                <div className="medicineContainer">
                    <div className="medicineContainerTop">
                        <img src={img[2]} alt="r1" className="containerImg" />
                        <img src={img[11]} alt="" className="containerImg" />
                    </div>
                    <div className="medicineContainerBottom">
                        <div className="upperHead">
                            <h3>Paracetamol</h3>
                            <h3>Aspirin</h3>
                        </div>
                        <div className="lowerHead">
                            <h3>Disease-Fever</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row2">
                <div className="medicineContainer">
                    <div className="medicineContainerTop">
                        <img src={img[3]} alt="r1" className="containerImg" />
                        <img src={img[12]} alt="" className="containerImg" />
                    </div>
                    <div className="medicineContainerBottom">
                        <div className="upperHead">
                            <h3>Chloroquine</h3>
                            <h3>Tafenoquine</h3>
                        </div>
                        <div className="lowerHead">
                            <h3>Disease-Malaria</h3>
                        </div>
                    </div>
                </div>
                <div className="medicineContainer">
                    <div className="medicineContainerTop">
                        <img src={img[4]} alt="r1" className="containerImg" />
                        <img src={img[13]} alt="" className="containerImg" />
                    </div>
                    <div className="medicineContainerBottom">
                        <div className="upperHead">
                            <h3>Aspirin</h3>
                            <h3>Oxycodone</h3>
                        </div>
                        <div className="lowerHead">
                            <h3>Disease-Migraine</h3>
                        </div>
                    </div>
                </div>
                <div className="medicineContainer">
                    <div className="medicineContainerTop">
                        <img src={img[5]} alt="r1" className="containerImg" />
                        <img src={img[14]} alt="" className="containerImg" />
                    </div>
                    <div className="medicineContainerBottom">
                        <div className="upperHead">
                            <h3>Melitracen</h3>
                            <h3>Vortioxetine</h3>
                        </div>
                        <div className="lowerHead">
                            <h3>Disease-Panic Attack</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row3">
                <div className="medicineContainer">
                    <div className="medicineContainerTop">
                        <img src={img[6]} alt="r1" className="containerImg" />
                        <img src={img[15]} alt="" className="containerImg" />
                    </div>
                    <div className="medicineContainerBottom">
                        <div className="upperHead">
                            <h3>Vortioxetine</h3>
                            <h3>Cidofovir</h3>
                        </div>
                        <div className="lowerHead">
                            <h3>Disease-Rashes</h3>
                        </div>
                    </div>
                </div>
                <div className="medicineContainer">
                    <div className="medicineContainerTop">
                        <img src={img[7]} alt="r1" className="containerImg" />
                        <img src={img[16]} alt="" className="containerImg" />
                    </div>
                    <div className="medicineContainerBottom">
                        <div className="upperHead">
                            <h3>Cinchocaine </h3>
                            <h3> Nitrofurazone </h3>
                        </div>
                        <div className="lowerHead">
                            <h3>Disease- Burn</h3>
                        </div>
                    </div>
                </div>
                <div className="medicineContainer">
                    <div className="medicineContainerTop">
                        <img src={img[8]} alt="r1" className="containerImg" />
                        <img src={img[17]} alt="" className="containerImg" />
                    </div>
                    <div className="medicineContainerBottom">
                        <div className="upperHead">
                            <h3>Canagliflozin</h3>
                            <h3>Chlorpropamide </h3>
                        </div>
                        <div className="lowerHead">
                            <h3>Disease-Diabetes</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
