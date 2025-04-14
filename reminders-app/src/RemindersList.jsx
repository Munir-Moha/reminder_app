import PropTypes from "prop-types";
import Reminder from "./Reminder";

const date = new Date();
const formattedDate = date.toISOString().substr(0, 10);

function RemindersList({ reminders }) {
  const hasReminders = reminders && reminders.length > 0;

  const fallbackReminder = {
    reminderText: "No Reminder Yet",
    dueDate: formattedDate,
    isComlete: false,
  };

  const safeReminders = hasReminders ? reminders : [fallbackReminder];

  const reminderItems = safeReminders.map((reminder, index) => (
    <Reminder
      reminderText={reminder.reminderText}
      dueDate={reminder.dueDate}
      isComlete={reminder.isComlete}
      id={index}
      key={index}
    />
  ));

  return <div>{reminderItems}</div>;
}

// Set PropTypes
RemindersList.propTypes = {
  reminders: PropTypes.arrayOf(
    PropTypes.shape({
      reminderText: PropTypes.string,
      dueDate: PropTypes.string,
      isComlete: PropTypes.bool,
    })
  ),
};

// Set default props
RemindersList.defaultProps = {
  reminders: [
    {
      reminderText: "No Reminder Yet",
      dueDate: formattedDate,
      isComlete: false,
    },
  ],
};

export default RemindersList;
