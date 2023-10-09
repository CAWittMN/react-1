import SelectBtn from "./SelectBtn";
import { useState } from "react";
import { findStory } from "../helpers";

const StorySelect = ({ stories, setStory }) => {
  const [formData, setFormData] = useState(1);

  const handleChange = (e) => {
    const value = parseInt(e.target.value);
    setFormData(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const story = findStory(stories, formData);
    setStory(story);
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
        <select onChange={handleChange}>{options}</select>
        <SelectBtn onClick={handleSubmit} />
      </form>
    </div>
  );
};

export default StorySelect;
