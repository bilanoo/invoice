import { useState } from "react";
import { DeleteInvoiceDialog } from "../DeleteInvoiceDialog/DeleteInvoiceDialog";
import {
  DeleteInvoiceButton,
  EditInvoiceButton,
  MarkAsPaidButton,
} from "./InvoiceActionsStyles";

interface InvoiceActionsForModificationProps {
  markInvoiceAsPaid: () => void;
  deleteInvoice: () => void;
  handleEditInvoiceClick: () => void;
  status: string;
}

export const InvoiceActionsForModification = ({
  markInvoiceAsPaid,
  status,
  deleteInvoice,
  handleEditInvoiceClick,
}: InvoiceActionsForModificationProps) => {
  const [openDeleteConfirmationDialog, setOpenDeleteConfirmationDialog] =
    useState(false);

  const openDeleteDialog = () => {
    setOpenDeleteConfirmationDialog(true);
  };
  const handleDeleteInvoiceClick = () => {
    deleteInvoice();
    setOpenDeleteConfirmationDialog(false);
  };

  return (
    <>
      <EditInvoiceButton onClick={handleEditInvoiceClick}>
        Edit
      </EditInvoiceButton>
      <DeleteInvoiceButton
        sx={{ marginTop: "21px", marginBottom: "22px" }}
        onClick={openDeleteDialog}
      >
        Delete
      </DeleteInvoiceButton>
      <MarkAsPaidButton
        disabled={status === "paid"}
        sx={{ marginRight: "0 !important" }}
        onClick={markInvoiceAsPaid}
      >
        Mark as Paid
      </MarkAsPaidButton>

      <DeleteInvoiceDialog
        open={openDeleteConfirmationDialog}
        handleClose={() => setOpenDeleteConfirmationDialog(false)}
        handleDelete={handleDeleteInvoiceClick}
      />
    </>
  );
};
