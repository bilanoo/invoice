import {
  ActionsContainer,
  CancelButton,
  SaveAsDraftButton,
  SaveChangesButton,
} from "./FormActionsStyles";

interface FormActionsButtonsProps {
  editingOrCreatingAnInvoice: "edit" | "create";
  isUserAbleToSave: boolean;
  handleCancelOnClick: () => void;
  handleSaveChangesClick: () => void;
}
export const FormActionsButtons = ({
  editingOrCreatingAnInvoice,
  isUserAbleToSave,
  handleCancelOnClick,
  handleSaveChangesClick,
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
        onClick={handleCancelOnClick}
      >
        {editingOrCreatingAnInvoice === "edit" ? "Cancel" : "Discard"}
      </CancelButton>
      {editingOrCreatingAnInvoice === "create" && (
        <SaveAsDraftButton>Save as Draft</SaveAsDraftButton>
      )}
      <SaveChangesButton
        onClick={handleSaveChangesClick}
        disabled={!isUserAbleToSave}
      >
        {editingOrCreatingAnInvoice === "edit" ? "Save Changes" : "Save & Send"}
      </SaveChangesButton>
    </ActionsContainer>
  );
};
