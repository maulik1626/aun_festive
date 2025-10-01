import { useState } from "react";
import { Container, Stack } from "@mui/material";
import Button from "@presentation/components/base/Button.jsx";
import Input from "@presentation/components/base/Input.jsx";
import Text from "@presentation/components/base/Text.jsx";
import Image from "@presentation/components/base/Image.jsx";
import Card from "@presentation/components/base/Card.jsx";
import Modal from "@presentation/components/base/Modal.jsx";
import Loader from "@presentation/components/base/Loader.jsx";
import Icon from "@presentation/components/base/Icon.jsx";
import { ICONS } from "@config/icons";
import { useResponsive } from "@utils/hooks/useResponsive";
import { STRINGS } from "@config/constants/strings";

export default function BaseComponentsDemo() {
  const [open, setOpen] = useState(false);
  const { isMobile, isTablet } = useResponsive();
  const buttonDirection = isMobile ? "column" : "row";
  const buttonSpacing = isMobile ? 1 : 2;
  const imageSize = isMobile ? 48 : isTablet ? 56 : 64;
  return (
    <Container
      disableGutters={isMobile}
      maxWidth={isMobile ? "xs" : "md"}
      sx={{
        py: isMobile ? 2 : 4,
        px: isMobile ? 1 : 2,
        overflowX: "hidden",
        width: "100%",
      }}
    >
      <Stack
        spacing={isMobile ? 1.5 : 2}
        alignItems={isMobile ? "stretch" : "flex-start"}
        sx={{ width: "100%" }}
      >
        <Text variant="h4">{STRINGS.demo.title}</Text>
        <Text variant="h1">{STRINGS.demo.headingOne}</Text>
        <Text variant="h2">{STRINGS.demo.headingTwo}</Text>
        <Text variant="body1">{STRINGS.demo.bodyExample}</Text>
        <Text variant="caption">{STRINGS.demo.captionExample}</Text>
        <Stack
          direction={buttonDirection}
          spacing={buttonSpacing}
          alignItems={isMobile ? "stretch" : "center"}
          sx={{ width: "100%" }}
        >
          <Button
            onClick={() => setOpen(true)}
            size={isMobile ? "small" : "medium"}
            fullWidth={isMobile}
          >
            {STRINGS.demo.primaryCta}
          </Button>
          <Button
            kind="secondary"
            size={isMobile ? "small" : "medium"}
            fullWidth={isMobile}
          >
            {STRINGS.demo.secondaryAction}
          </Button>
          <Button
            kind="text"
            size={isMobile ? "small" : "medium"}
            fullWidth={isMobile}
          >
            {STRINGS.demo.textLink}
          </Button>
          <Button
            disabled
            size={isMobile ? "small" : "medium"}
            fullWidth={isMobile}
          >
            {STRINGS.demo.disabled}
          </Button>
        </Stack>
        <Input placeholder={STRINGS.demo.inputPlaceholder} />
        <Card
          sx={{ width: "100%" }}
          actions={
            <Button size={isMobile ? "small" : "medium"}>
              {STRINGS.demo.save}
            </Button>
          }
        >
          <Text>{STRINGS.demo.cardContent}</Text>
        </Card>
        <Loader />
        <Icon
          src={ICONS.ui.shoppingBasket}
          size="medium"
          alt={STRINGS.demo.shoppingBasketAlt}
        />
        <Icon
          src={ICONS.ui.appIcon}
          size="large"
          alt={STRINGS.demo.appIconAlt}
        />
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title={STRINGS.demo.modalTitle}
          maxWidth={isMobile ? "xs" : "sm"}
        >
          <Text>{STRINGS.demo.modalContent}</Text>
        </Modal>
      </Stack>
    </Container>
  );
}
