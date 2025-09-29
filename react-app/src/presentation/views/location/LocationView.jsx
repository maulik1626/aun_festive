import { useDispatch, useSelector } from "react-redux";
import { Button, Container, Stack, Typography } from "@mui/material";
import {
  selectCoords,
  selectLocationStatus,
  selectLocationSource,
  selectPermission,
} from "@store/selectors/locationSelectors";
import { detectLocationRequest, clearLocation } from "@store/slices/locationSlice";

export default function LocationView() {
  const dispatch = useDispatch();
  const coords = useSelector(selectCoords);
  const status = useSelector(selectLocationStatus);
  const source = useSelector(selectLocationSource);
  const permission = useSelector(selectPermission);

  return (
    <Container sx={{ py: 4 }}>
      <Stack spacing={2}>
        <Typography variant="h4">Location Debug</Typography>
        <Typography variant="body2">Status: {status}</Typography>
        <Typography variant="body2">Permission: {permission}</Typography>
        <Typography variant="body2">Source: {source || "-"}</Typography>
        <Typography variant="body2">
          Coords: {coords ? `${coords.latitude}, ${coords.longitude} (±${coords.accuracy}m)` : "-"}
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button
            variant="contained"
            onClick={() => dispatch(detectLocationRequest())}
          >
            Detect Location
          </Button>
          <Button variant="outlined" onClick={() => dispatch(clearLocation())}>
            Clear
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
}


