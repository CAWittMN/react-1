import "../styles/SelectBtn.css";
const SelectBtn = ({ onClick }) => (
  <button
    className="SelectBtn
    mb-1 "
    type="submit"
    onClick={onClick}
  >
    Select
  </button>
);

export default SelectBtn;
