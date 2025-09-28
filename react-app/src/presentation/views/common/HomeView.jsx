import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useResponsive } from "@utils/hooks/useResponsive";
import { useCart } from "@utils/hooks/useCart";
import { formatCurrency } from "@utils/helpers/formatters";

export default function HomeView() {
  const { isMobile } = useResponsive();
  const { count, total } = useCart();
  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Home
      </Typography>
      <Typography variant="body1" color="text.secondary" gutterBottom>
        App is running. Replace this with your actual Home screen.
      </Typography>
      <Typography variant="body2" color="text.secondary" gutterBottom>
        {isMobile ? "Mobile" : "Desktop"} • Cart: {count} items • Total:{" "}
        {formatCurrency(total)}
      </Typography>
      <Button variant="contained" color="primary">
        Primary CTA
      </Button>
    </Container>
  );
}
