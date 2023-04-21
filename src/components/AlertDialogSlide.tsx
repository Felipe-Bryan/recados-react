import * as React from 'react';
import { TransitionProps } from '@mui/material/transitions';
import { Slide, DialogTitle, DialogContentText, DialogContent, DialogActions, Dialog, Button } from '@mui/material';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface AlertDialogSlideProps {
  title: string;
  description: string;
  openDialog: boolean;
  actionConfirm: () => void;
  confirmButtonTitle: string;
  actionCancel: () => void;
  onKeyDownAction: React.KeyboardEventHandler;
}

const AlertDialogSlide: React.FC<AlertDialogSlideProps> = ({
  title,
  confirmButtonTitle,
  description,
  openDialog,
  actionConfirm,
  actionCancel,
  onKeyDownAction
}) => {
  return (
    <div>
      <Dialog
        onKeyDown={onKeyDownAction}
        open={openDialog}
        onClose={actionCancel}
        TransitionComponent={Transition}
        keepMounted
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">{description}</DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button variant="text" onClick={actionConfirm}>
            {confirmButtonTitle}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AlertDialogSlide;
