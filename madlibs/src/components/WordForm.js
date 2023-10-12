import { useState } from "react";
import WordInput from "./WordInput";
import SubmitBtn from "./SubmitBtn";
import "../styles/WordForm.css";

const WordForm = ({ onSubmit, words }) => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(() => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const isFormFilled = () => {
    const values = Object.values(formData);
    if (values.includes("")) {
      return false;
    } else if (values.length === 0) {
      return false;
    } else if (values.length !== words.length) {
      return false;
    }
    return true;
  };

  const inputs = words.map((word, idx) => {
    return (
      <WordInput
        key={idx}
        label={word}
        name={`${idx}-${word}`}
        placeholder={word}
        handleChange={handleChange}
      />
    );
  });

  return (
    <form className="WordForm" onSubmit={handleSubmit}>
      {inputs}
      {isFormFilled() && <SubmitBtn handleSubmit={handleSubmit} />}
    </form>
  );
};

export default WordForm;
