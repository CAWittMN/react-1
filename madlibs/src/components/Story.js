import "../styles/Story.css";

const Story = ({ story, answers, insertWords }) => {
  const newStory = insertWords(story, answers);
  return (
    <div className="Story-section">
      <h3 className="Story-title">{story.title}</h3>
      <p className="Story-text">{newStory}</p>
    </div>
  );
};

export default Story;
