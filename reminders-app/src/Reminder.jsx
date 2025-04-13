function Reminder(props){
    return(
        <div>
            item:{props.reminderText}
            due date: {props.dueDate}
            Completed?: {String(props.isComlete)}
        </div>
    );
}

export default Reminder;