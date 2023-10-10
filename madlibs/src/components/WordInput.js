import "../styles/WordInput.css";

const WordInput = ({ label, value, name, handleChange }) => {
  const formatedName = name.toLowerCase().split(" ").join("-");
  const formatedLabel = label.charAt(0).toUpperCase() + label.slice(1);

  return (
    <div className="WordInput">
      <label className="WordInput-label" htmlFor={formatedName}>
        {formatedLabel}:
      </label>
      <input
        className="WordInput-input"
        type="text"
        name={formatedName}
        value={value}
        onChange={handleChange}
        placeholder={formatedLabel}
      />
    </div>
  );
};

export default WordInput;
