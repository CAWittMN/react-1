import { useState } from "react";
import WordInput from "./WordInput";
import SubmitBtn from "./SubmitBtn";
import { findWords } from "../helpers";

const WordForm = ({ story, setAnswers }) => {
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
    setAnswers(formData);
  };

  const words = findWords(story);

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
      {Object.keys(formData).length === words.length && (
        <SubmitBtn handleSubmit={handleSubmit} />
      )}
    </form>
  );
};

export default WordForm;
