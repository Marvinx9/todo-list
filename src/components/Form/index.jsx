import { FormButton } from "../FormButton";
import { TextInput } from "../TextInput";
import "./form.style.css";

export function Form({ onSubmit, defaultValue }) {
  return (
    <form className="form-save-item" action={onSubmit}>
      <TextInput
        placeholder="Digite o item que deseja adicionar"
        name="description"
        required
        defaultValue={defaultValue}
      />
      <FormButton>Salvar item</FormButton>
    </form>
  );
}
