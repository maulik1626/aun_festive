import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import { useResponsive } from "@utils/hooks/useResponsive";
import { TYPOGRAPHY } from "@config/constants/typography";
import { DIMENSIONS } from "@config/constants/dimensions";
import { SPACING } from "@config/constants/spacing";

export default function Modal({
  open,
  title,
  children,
  actions,
  onClose,
  maxWidth = "sm",
  // Customization hooks (all optional)
  drawerProps,
  dialogProps,
  titleProps,
  contentProps,
  actionsProps,
  paperSx,
  titleSx,
  contentSx,
  actionsSx,
  containerSx,
}) {
  const { isMobile } = useResponsive();

  if (isMobile) {
    return (
      <Drawer
        anchor="bottom"
        open={open}
        onClose={onClose}
        PaperProps={{
          sx: {
            borderTopLeftRadius: DIMENSIONS.borderRadius.xl,
            borderTopRightRadius: DIMENSIONS.borderRadius.xl,
            maxHeight: "80vh",
            ...paperSx,
          },
          ...(drawerProps?.PaperProps || {}),
        }}
        {...drawerProps}
      >
        <Box sx={{ p: 2, ...(containerSx || {}) }}>
          {title ? (
            <Box
              sx={{
                fontWeight: TYPOGRAPHY.fontWeight.semibold,
                mb: 1.5,
                ...(titleSx || {}),
              }}
              {...titleProps}
            >
              {title}
            </Box>
          ) : null}
          <Box sx={{ ...(contentSx || {}) }} {...contentProps}>
            {children}
          </Box>
          {actions ? (
            <Box
              sx={{ mt: 2, display: "flex", gap: 1, ...(actionsSx || {}) }}
              {...actionsProps}
            >
              {actions}
            </Box>
          ) : null}
        </Box>
      </Drawer>
    );
  }

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth={maxWidth}
      fullWidth
      PaperProps={{
        sx: { ...(paperSx || {}) },
        ...(dialogProps?.PaperProps || {}),
      }}
      {...dialogProps}
    >
      {title ? (
        <DialogTitle sx={{ ...(titleSx || {}) }} {...titleProps}>
          {title}
        </DialogTitle>
      ) : null}
      <DialogContent dividers sx={{ ...(contentSx || {}) }} {...contentProps}>
        {children}
      </DialogContent>
      {actions ? (
        <DialogActions sx={{ ...(actionsSx || {}) }} {...actionsProps}>
          {actions}
        </DialogActions>
      ) : null}
    </Dialog>
  );
}
