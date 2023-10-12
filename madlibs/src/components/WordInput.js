import "../styles/WordInput.css";

const WordInput = ({ label, value, name, handleChange }) => {
  const formattedName = name.toLowerCase().split(" ").join("-");
  const formattedLabel = label.charAt(0).toUpperCase() + label.slice(1);

  return (
    <div className="WordInput">
      <label className="WordInput-label" htmlFor={formattedName}>
        {formattedLabel}:
      </label>
      <input
        className="WordInput-input"
        type="text"
        name={formattedName}
        value={value}
        onChange={handleChange}
        placeholder={formattedLabel}
      />
    </div>
  );
};

export default WordInput;
