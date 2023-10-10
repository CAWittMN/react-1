import "../styles/SubmitBtn.css";

const SubmitBtn = ({ handleSubmit }) => {
  return (
    <>
      <button className="SubmitBtn" type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </>
  );
};

export default SubmitBtn;
