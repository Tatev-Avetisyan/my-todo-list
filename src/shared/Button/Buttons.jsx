const Button = ({ context, onClick, type = "button", className }) => {
  return (
    <button type={type} onClick={onClick} className={className}>
      {context}
    </button>
  );
};

export default Button;
