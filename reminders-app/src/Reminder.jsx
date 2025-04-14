import PropTypes from "prop-types";

function Reminder(props) {
  return (
    <div>
      item:{props.reminderText}
      <br />
      due date: {props.dueDate}
      <br />
      Completed?: {String(props.isComplete)}
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
  isComplete: false,
};

export default Reminder;
