import React from "react";

import garbageSpeaking from "../../assets/garbage_happy.png";

function GarbageSpeaking() {
    return (
        <div
            style={{
                position: "absolute",
                left: "30%",
                zIndex: 4,
            }}
        >
            <img
                src={garbageSpeaking}
                alt="Imagen"
                width={300}
                style={{ marginTop: "20%" }}
            />
        </div>
    );
}

export default GarbageSpeaking;
