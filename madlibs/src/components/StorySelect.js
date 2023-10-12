import SelectBtn from "./SelectBtn";
import { useState } from "react";
import "../styles/StorySelect.css";

const StorySelect = ({ stories, onSubmit, findStory }) => {
  const [formData, setFormData] = useState(1);

  const handleChange = (e) => {
    const value = parseInt(e.target.value);
    setFormData(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const story = findStory(stories, formData);
    onSubmit(story);
  };

  const options = stories.map((story) => {
    return (
      <option key={story.id} name={story.id} value={story.id}>
        {story.title}
      </option>
    );
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <select className="StorySelect-menu" onChange={handleChange}>
          {options}
        </select>
        <SelectBtn onClick={handleSubmit} />
      </form>
    </div>
  );
};

export default StorySelect;
