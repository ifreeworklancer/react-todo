import React, {useState} from "react";
import classes from './CreateTodoForm.module.scss'
import AppInput from "../../UI/control/input/AppInput";
import AppCheckbox from "../../UI/control/checkbox/AppCheckbox";
import AppButton from "../../UI/button/AppButton";

function CreateTodoForm({createTodo}) {
    const [form, setForm] = useState({title: '', completed: false})

    function changeForm(value, control) {
        setForm(oldValues => ({
            ...oldValues,
            [control]: value
        }));
    }

    function submitForm(e) {
        e.preventDefault();
        createTodo({
            id: Date.now(),
            title: form.title,
            completed: form.completed
        })
        setForm({title: '', completed: false})
    }

    return (
        <form onSubmit={submitForm}>
            <h2 className={[classes.title].join(' ')}>
                Create Todo
            </h2>
            <div className={[classes.formRow].join(' ')}>
                <AppInput value={form.title} name="title" onChange={(e) => changeForm(e.target.value, e.target.name)}>Title</AppInput>
            </div>
            <div className={[classes.formRow].join(' ')}>
                <AppCheckbox checked={form.completed} name="completed" onChange={(e) => {changeForm(e.target.checked, e.target.name)}}>Is Completed</AppCheckbox>
            </div>
            <AppButton type="submit">Create</AppButton>
        </form>
    )
}

export default CreateTodoForm;
