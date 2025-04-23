import { useState, useMemo } from "react";
import InputForm from "./InputForm";
import FilterSelect from "./FilterSelect";
import RemindersList from "./RemindersList";

function App() {
  const [reminders, setReminders] = useState([]);
  const [userInput, setUserInput] = useState({ reminderText: "", dueDate: "" });
  const [selectedFilter, setSelectedFilter] = useState("All");

  const addNewReminder = (itemToAdd) => {
    if (reminders === undefined) {
      setReminders([itemToAdd]);
    } else {
      setReminders([...reminders, itemToAdd]);
    }
  };
  const filteredList = useMemo(
    () => filterdList(reminders, selectedFilter),
    [reminders, selectedFilter]
  );
  // Filter the reminders based on the selected filter
  // and return the filtered list

  function filterdList(reminders, selectedFilter) {
    let numberofDays;

    if (selectedFilter === "all") {
      return reminders;
    } else {
      switch (selectedFilter) {
        case "2day":
          numberofDays = 2;
          break;
        case "1week":
          numberofDays = 7;
          break;
        case "30days":
          numberofDays = 30;
          break;
        default:
          numberofDays = 0;
          break;
      }
    }

    const result = reminders.filter((reminder) => {
      const todaysDate = new Date().toISOString().substring(0, 10);
      const todayTime = new Date(todaysDate).getTime();
      const dueTime = new Date(reminder.dueDate).getTime();
      return dueTime < todayTime + numberofDays * 86400000;
    });
    return result;
  }

  function setIsComplete(isComplete, index) {
    const newReminders = [
      ...reminders.slice(0, index),
      { ...reminders[index], isComplete },
      ...reminders.slice(index + 1),
    ];
    setReminders(newReminders);
  }

  return (
    <div>
      <InputForm
        userInput={userInput}
        setUserInput={setUserInput}
        addNewReminder={addNewReminder}
      />
      <FilterSelect
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
      <RemindersList reminders={filteredList} setIsComplete={setIsComplete} />
    </div>
  );
}

export default App;
