import { FormButton } from "../FormButton";
import { TextInput } from "../TextInput";
import "./form.style.css";

export function Form({ onSubmit }) {
  return (
    <form className="form-save-item" action={onSubmit}>
      <TextInput
        placeholder="Digite o item que deseja adicionar"
        name="description"
        required
      />
      <FormButton>Salvar item</FormButton>
    </form>
  );
}
