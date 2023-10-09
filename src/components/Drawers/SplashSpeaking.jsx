import React from "react";

import splashImage from "../../assets/splash_drawer.png";

function SplashSpeaking() {
    return (
        <div
            style={{
                position: "absolute",
                left: "30%",
                zIndex: 4,
            }}
        >
            <img
                src={splashImage}
                alt="Imagen"
                width={300}
                style={{ marginTop: "10%" }}
            />
        </div>
    );
}

export default SplashSpeaking;
