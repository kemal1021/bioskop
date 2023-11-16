// pages/index.tsx
import React from "react";
import { Typography, Button } from "@mui/material";

const Home: React.FC = () => {
  return (
    <div width="900px">
      <Typography variant="h1" text="20px" component="h1" color="blue">
        Hello, MUI!
      </Typography>
      <Button variant="contained" color="primary" text-color="black">
        Click Me
      </Button>
    </div>
  );
};

export default Home;
