import React, { useState } from "react";
import WordForm from "./WordForm";
import stories from "../stories";
import StorySelect from "./StorySelect";
import Story from "./Story";
import ResetBtn from "./ResetBtn";
import { findStory, findWords, insertWords } from "../helpers";
import "../styles/Madlib.css";

const Madlib = () => {
  const [story, setStory] = useState(null);
  const [answers, setAnswers] = useState(null);

  const handleReset = () => {
    setStory(null);
    setAnswers(null);
  };

  return (
    <div className="container">
      <h1 className="Madlib-title mt-3">Madlibs</h1>
      {story ? (
        <>
          <ResetBtn onClick={handleReset} />
          <WordForm words={findWords(story)} onSubmit={setAnswers} />
        </>
      ) : (
        <StorySelect
          stories={stories}
          onSubmit={setStory}
          findStory={findStory}
        />
      )}
      {answers && (
        <div className="Madlib-story-section ">
          <Story story={story} insertWords={insertWords} answers={answers} />
        </div>
      )}
    </div>
  );
};

export default Madlib;
