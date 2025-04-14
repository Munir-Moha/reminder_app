import PropTypes from "prop-types";

function InputForm({
  userInput = { reminderText: "", dueDate: formattedDate },
  setUserInput, addNewReminder,
}) {
  const handleTextChange = (e) => {
    const newUserInput = { ...userInput, reminderText: e.target.value };
    setUserInput(newUserInput);
  };

  const handleDateChange = (e) => {
    const date = new Date(e.target.value);
    const formattedDate = date.toISOString().substring(0, 10);
    const newUserInput = { ...userInput, dueDate: formattedDate };
    setUserInput(newUserInput);
  };

  const handleClick = (e) => {
    e.preventDefault();
    const itemToAdd = {...userInput, isComplete: false};
    addNewReminder(itemToAdd);
  }

  return (
    <form>
      <input
        value={userInput.reminderText}
        id="reminderText"
        type="text"
        placeholder="What do you want to do?"
        onChange={handleTextChange}
      />
      <br />
      <input value={userInput.dueDate} id="dueDate" type="date"  onChange={handleDateChange}/>
      <br />
      <button onClick={handleClick}>Add Item</button>
    </form>
  );
}

InputForm.propTypes = {
  userInput: PropTypes.shape({
    reminderText: PropTypes.string,
    dueDate: PropTypes.string,
  }),
  setUserInput: PropTypes.func,
  addNewReminder: PropTypes.func,
};

const date = Date();
const formattedDate = date.toString().substring(0, 10);

InputForm.defaultProps = {
  userInput: {
    reminderText: "",
    dueDate: formattedDate,
  },
};

export default InputForm;
