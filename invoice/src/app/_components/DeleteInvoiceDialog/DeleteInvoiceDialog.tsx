import { Slide } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import { forwardRef } from "react";
import {
  ActionsContainer,
  CancelButton,
  ConfirmButton,
  DeleteConfirmationText,
  DelitionDescription,
  DialogContainer,
} from "./DeleteDialog.styles";

interface DeleteInvoiceDialogProps {
  open: boolean;
  handleClose: () => void;
  handleDelete: () => void;
}

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const DeleteInvoiceDialog = ({
  open,
  handleClose,
  handleDelete,
}: DeleteInvoiceDialogProps) => {
  const closeDialogWithoutDelition = () => {
    handleClose();
  };

  const deleteInvoice = () => {
    handleDelete();
  };

  return (
    <DialogContainer
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
      fullWidth={true}
      maxWidth="sm"
    >
      <DeleteConfirmationText>Confirm Deletion</DeleteConfirmationText>
      <DelitionDescription>
        Are you sure you want to delete invoice #XM9141? This action cannot be
        undone.
      </DelitionDescription>

      <ActionsContainer>
        <CancelButton onClick={closeDialogWithoutDelition}>Cancel</CancelButton>
        <ConfirmButton onClick={deleteInvoice}>Delete</ConfirmButton>
      </ActionsContainer>
    </DialogContainer>
  );
};
