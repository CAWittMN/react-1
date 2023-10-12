/**
 * finds the story with the given id with the binary search algorithm
 */
const findStory = (stories, id) => {
  let start = 1;
  let end = stories.length;
  let mid = Math.floor((start + end) / 2);
  while (stories[mid - 1].id !== id && start <= end) {
    const midStory = stories[mid - 1];
    if (id < midStory.id) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
    mid = Math.floor((start + end) / 2);
  }
  if (stories[mid - 1].id === id) {
    return stories[mid - 1];
  } else {
    return null;
  }
};

/**
 * finds all the Mad Lib word types in the story and
 * returns an array of the words without $$ around them
 */
const findWords = (story) => {
  const regex = /\$\$(.*?)\$\$/g;
  const words = story.text.match(regex);
  const cleanedWords = words.map((word) => {
    return word.slice(2, word.length - 2);
  });
  return cleanedWords;
};

/**
 * inserts the answers into the story and returns a new story
 */
const insertWords = (story, answers) => {
  let newStory = story.text;
  for (const key in answers) {
    const wordType = key.slice(key.indexOf("-") + 1).replace(/-/g, " ");
    newStory = newStory.replace(`$$${wordType}$$`, answers[key]);
  }
  return newStory;
};

export { findStory, findWords, insertWords };
