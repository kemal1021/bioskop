import React from "react";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";

const ScrollableContainer = () => {
  return (
    <div className="w-full h-full">
      <SimpleBar
        style={{ maxHeight: "100%", paddingRight: "0.5rem" }}
        className="h-full"
      >
        {/* Konten Anda */}
      </SimpleBar>
    </div>
  );
};

export default ScrollableContainer;
