// import React from "react";
// import { Stack } from "@mui/material";
// import { InfinitySpin } from "react-loader-spinner";

// const Loader = () => (
//   <Stack
//     direction="row"
//     justifyContent="center"
//     alignItems="center"
//     width="100%"
//   >
//     <InfinitySpin color="grey" />
//   </Stack>
// );

// export default Loader;

import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";

// const override: CSSProperties = {
//   display: "block",
//   margin: "0 auto",
//   borderColor: "red",
// };

// let [color, setColor] = useState("#FF0000");

const Loader = () => (
  <ClipLoader
    // color={color}
    size={150}
    // cssOverride={override}
    aria-label="Loading Spinner"
    data-testid="loader"
  />
);

export default Loader;
