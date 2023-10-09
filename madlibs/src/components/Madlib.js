import React, { useState } from "react";
import WordForm from "./WordForm";
import stories from "../stories";
import StorySelect from "./StorySelect";
import Story from "./Story";
import ResetBtn from "./ResetBtn";

const Madlib = () => {
  const [story, setStory] = useState(null);
  const [answers, setAnswers] = useState(null);

  const handleReset = () => {
    setStory(null);
    setAnswers(null);
  };

  return (
    <div>
      <h1>Madlibs</h1>
      {story ? (
        <>
          <ResetBtn onClick={handleReset} />
          <WordForm story={story} setAnswers={setAnswers} />
        </>
      ) : (
        <StorySelect stories={stories} setStory={setStory} />
      )}
      {answers && (
        <div>
          <Story story={story} answers={answers} />
        </div>
      )}
    </div>
  );
};

export default Madlib;
