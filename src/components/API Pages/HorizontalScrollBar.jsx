import React, { useState } from "react";
import { Box } from "@mui/material";
import Workout from "./Workout";
import { ScrollMenu, visibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";

const HorizontalScrollBar = ({ data, bodyPart, setBodyPart }) => {
  return (
    <ScrollMenu>
      {data.map((item) => (
        <Box
          key={item.id || item}
          itemId={item.id || item}
          title={item.id || item}
          m="0px 40px"
        >
          <Workout item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
        </Box>
      ))}
    </ScrollMenu>
  );
};

export default HorizontalScrollBar;
