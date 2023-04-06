import React from "react";
import { Stack } from "react-bootstrap";
  // --third-color: #609966;
  // --fourth-color: #40513B;


const BgHeroRb = ({ title, subtitle, image }) => {
  const bgImg = image? `linear-gradient(50deg, #40513B90, #60996650), url(${image})` : 'linear-gradient(25deg, rgba(10, 0, 0, 1), rgba(240, 210, 40, 1))'
  return (
    <Stack
      style={{
        background: bgImg,
        backgroundSize: 'cover',
        backgroundPosition: 'right',
        backgroundRepeat: 'no-repeat',
        padding: "120px 0",
      }}
    >
      <h2
        className="display-4 m-3 fw-bold text-light text-uppercase"
        style={{
          letterSpacing: "3px",
        }}
      >
        {title}
      </h2>
      <h4 className="px-3 m-3 fst-italic fs-3" style={{ color: "#fff" }}>
        { subtitle? subtitle : '¡Las plantas más lindas del País!'} 
      </h4>
    </Stack>
  );
};

export default BgHeroRb;