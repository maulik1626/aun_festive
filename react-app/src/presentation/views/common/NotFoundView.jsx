import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function NotFoundView() {
  return (
    <Container sx={{ py: 8, textAlign: "center" }}>
      <Typography variant="h3" gutterBottom>
        404
      </Typography>
      <Typography variant="h6" color="text.secondary">
        The page you’re looking for doesn’t exist.
      </Typography>
    </Container>
  );
}
