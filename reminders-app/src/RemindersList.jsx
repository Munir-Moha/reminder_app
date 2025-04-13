import Reminder from "./Reminder";

function RemindersList(props){
    return(
        <div>
            <Reminder reminderText="Pick up Wesley" dueDate="2364-01-15" isComlete={false}/>
            <Reminder reminderText="Meet with Jean-luc" dueDate="2364-01-29" isComlete={false}/>
            <Reminder reminderText="Holodeck time!" dueDate="2364-06-01" isComlete={false}/>
        </div>
    );
}

export default RemindersList;