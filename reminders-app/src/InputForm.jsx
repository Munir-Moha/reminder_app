import PropTypes from "prop-types";

function InputForm({
  userInput = { reminderText: "", dueDate: formattedDate },
  setUserInput,
}) {
  return (
    <form>
      <input
        value={userInput.reminderText}
        id="reminderText"
        type="text"
        placeholder="What do you want to do?"
      />
      <br />
      <input value={userInput.dueDate} id="dueDate" type="date" />
      <br />
      <button>Add Item</button>
    </form>
  );
}

InputForm.propTypes = {
  userInput: PropTypes.shape({
    reminderText: PropTypes.string,
    dueDate: PropTypes.string,
  }),
  setUserInput: PropTypes.func,
};

const date = Date();
const formattedDate = date.toString().substr(0, 10);

InputForm.defaultProps = {
  userInput: {
    reminderText: "",
    dueDate: formattedDate,
  },
};

export default InputForm;
