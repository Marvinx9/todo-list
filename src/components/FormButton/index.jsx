import "./form-button.style.css";

export function FormButton({ children, ...rest }) {
  return (
    <button className="btn-form" {...rest}>
      {children}
    </button>
  );
}
