import { useState } from "react";
import WordInput from "./WordInput";
import SubmitBtn from "./SubmitBtn";
import "../styles/WordForm.css";

const WordForm = ({ story, setAnswers, findWords }) => {
  const [wordFormData, setWordFormData] = useState({});
  const words = findWords(story);

  const handleWordChange = (e) => {
    const { name, value } = e.target;
    setWordFormData(() => ({
      ...wordFormData,
      [name]: value,
    }));
    console.log(wordFormData);
  };

  const handleWordSubmit = (e) => {
    e.preventDefault();
    setAnswers(wordFormData);
  };

  const isFormFilled = () => {
    const values = Object.values(wordFormData);
    if (values.includes("")) {
      return false;
    } else if (values.length === 0) {
      return false;
    } else if (values.length !== words.length) {
      return false;
    }
    return true;
  };

  console.log(isFormFilled());

  const inputs = words.map((word, idx) => {
    return (
      <WordInput
        key={idx}
        label={word}
        name={`${idx}-${word}`}
        placeholder={word}
        handleChange={handleWordChange}
      />
    );
  });

  return (
    <form className="WordForm" onSubmit={handleWordSubmit}>
      {inputs}
      {isFormFilled() && <SubmitBtn handleSubmit={handleWordSubmit} />}
    </form>
  );
};

export default WordForm;
