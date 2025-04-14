import PropTypes from "prop-types";
import Reminder from "./Reminder";

RemindersList.prototype = {
  reminders: PropTypes.array,
};

const date = new Date();
const formattedDate = date.toISOString().substr(0, 10);

RemindersList.defaultProps = {
  reminders: [
    {
      reminderText: "No Reminder Yet",
      dueDate: formattedDate,
      isComlete: false,
    },
  ],
};

function RemindersList({
  propReminders = {
    reminderText: "",
    dueDate: formattedDate,
    isComlete: false,
  },
}) {
  const reminders = propReminders.map((reminder, index) => {
    return (
      <Reminder
        reminderText={reminder.reminderText}
        dueDate={reminder.dueDate}
        isComlete={reminder.isComlete}
        id={index}
        key={index}
      />
    );
  });
  return <div>{reminders}</div>;
}

export default RemindersList;
