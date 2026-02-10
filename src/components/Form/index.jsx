import "./form.style.css";

export function Form({ children, onSubmit }) {
  return (
    <form className="form-save-item" action={onSubmit}>
      {children}
    </form>
  );
}
