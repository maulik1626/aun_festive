import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { DIMENSIONS } from "@config/constants/dimensions";

export default function Loader({
  size = DIMENSIONS.loader.size.medium,
  thickness = DIMENSIONS.loader.thickness,
}) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        py: 3,
      }}
    >
      <CircularProgress
        size={size}
        thickness={thickness}
        color="primary"
        sx={{
          "& .MuiCircularProgress-circle": {
            strokeLinecap: "round",
          },
        }}
      />
    </Box>
  );
}
