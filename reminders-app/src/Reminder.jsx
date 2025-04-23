import PropTypes from "prop-types";

function Reminder(props) {
  function handleCheckboxChange() {
    props.setIsComplete(!props.isComplete, props.id);
  }

  return (
    <div>
      item: {props.reminderText}
      due date: {props.dueDate}
      <span className="is-complete">
        is complete:
        <input
          type="checkbox"
          checked={props.isComplete}
          onChange={handleCheckboxChange}
        />
      </span>
    </div>
  );
}

Reminder.propTypes = {
  reminderText: PropTypes.string,
  dueDate: PropTypes.string,
  isComplete: PropTypes.bool,
};

const date = new Date();
const formattedDate = date.toISOString().substring(0, 10);

Reminder.defaultProps = {
  reminderText: "From Reminder",
  dueDate: formattedDate,
  isComplete: true,
};

export default Reminder;
