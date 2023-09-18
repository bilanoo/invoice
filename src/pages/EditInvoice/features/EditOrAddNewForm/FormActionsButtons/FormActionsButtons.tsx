import {
  ActionsContainer,
  CancelButton,
  SaveAsDraftButton,
  SaveChangesButton,
} from "./FormActionsStyles";

interface FormActionsButtonsProps {
  editingOrCreatingAnInvoice: "edit" | "create";
}
export const FormActionsButtons = ({
  editingOrCreatingAnInvoice,
}: FormActionsButtonsProps) => {
  return (
    <ActionsContainer>
      <CancelButton
        variant="outlined"
        sx={{
          marginRight:
            editingOrCreatingAnInvoice === "create" ? "auto !important" : "",
          marginLeft:
            editingOrCreatingAnInvoice === "create" ? "24px !important" : "",
        }}
      >
        {editingOrCreatingAnInvoice === "edit" ? "Cancel" : "Discard"}
      </CancelButton>
      {editingOrCreatingAnInvoice === "create" && (
        <SaveAsDraftButton>Save as Draft</SaveAsDraftButton>
      )}
      <SaveChangesButton>
        {editingOrCreatingAnInvoice === "edit" ? "Save Changes" : "Save & Send"}
      </SaveChangesButton>
    </ActionsContainer>
  );
};
