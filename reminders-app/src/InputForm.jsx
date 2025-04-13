function InputForm(props){
    return(
        <form>
            <input id="reminder" type="text" placeholder="What do you want to do?" /><br/>
            <input id="dueDate" type="date" /><br/>
            <button>Add Item</button>
        </form>
    );
}

export default InputForm;