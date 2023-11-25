import React from "react";

const Footer = (props) => {
  return (
    <footer
      style={{
        backgroundColor: props.mode === "light" ? "white" : "#18191A",
        color: props.mode === "light" ? "black" : "white",
      }}
    >
      <div
        class="small-4 medium-4 large-4 columns text-center "
        style={{
          backgroundColor: props.mode === "light" ? "#18191A" : "white",
          color: props.mode === "light" ? "white" : "black",
        }}
      >
        <i class="fa-brands fa-square-github fa-2x mx-5"></i>
        <i class="fa-brands fa-square-twitter fa-2x "></i>
        <i class="fa-brands fa-linkedin fa-2x mx-5"></i>
        <i class="fa-brands fa-square-facebook fa-2x "></i>
      </div>
    </footer>
  );
};

export default Footer;
