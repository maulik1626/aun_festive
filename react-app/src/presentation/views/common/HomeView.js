import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function HomeView(){
  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Home
      </Typography>
      <Typography variant="body1" color="text.secondary" gutterBottom>
        App is running. Replace this with your actual Home screen.
      </Typography>
      <Button variant="contained" color="primary">Primary CTA</Button>
    </Container>
  );
}
