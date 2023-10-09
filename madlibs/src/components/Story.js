import { insertWords } from "../helpers";

const Story = ({ story, answers }) => {
  const newStory = insertWords(story, answers);
  return <div>{newStory}</div>;
};

export default Story;
