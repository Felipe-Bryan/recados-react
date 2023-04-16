import * as React from 'react';
import { TransitionProps } from '@mui/material/transitions';
import { Slide, DialogTitle, DialogContent, DialogActions, Dialog, Button, Grid, TextField } from '@mui/material';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface AddTaskDialogProps {
  title: string;
  openDialog: boolean;
  onChange1: (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
  onChange2: (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
  valueInput1: string;
  valueInput2: string;
  actionConfirm: () => void;
  confirmButtonTitle: string;
  actionCancel: () => void;
  cancelButtonTitle: string;
  detailError: boolean;
  descriptionError: boolean;
  detailErrorText: string;
  descriptionErrorText: string;
  enableButton: boolean;
}

const AddTaskDialog: React.FC<AddTaskDialogProps> = ({
  title,
  confirmButtonTitle,
  openDialog,
  actionConfirm,
  actionCancel,
  onChange1,
  onChange2,
  valueInput1,
  valueInput2,
  cancelButtonTitle,
  detailError,
  descriptionError,
  detailErrorText,
  descriptionErrorText,
  enableButton
}) => {
  return (
    <div>
      <Dialog
        open={openDialog}
        onClose={actionCancel}
        TransitionComponent={Transition}
        keepMounted
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                error={detailError}
                helperText={detailErrorText}
                onChange={onChange1}
                value={valueInput1}
                fullWidth
                label="Detalhe"
                variant="standard"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                error={descriptionError}
                helperText={descriptionErrorText}
                onChange={onChange2}
                value={valueInput2}
                fullWidth
                label="Descrição"
                variant="standard"
              />
            </Grid>
          </Grid>
        </DialogContent>

        <DialogActions>
          <Button color="error" variant="outlined" onClick={actionCancel}>
            {cancelButtonTitle}
          </Button>
          <Button disabled={enableButton} color="success" variant="outlined" onClick={actionConfirm}>
            {confirmButtonTitle}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddTaskDialog;
