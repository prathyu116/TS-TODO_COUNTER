import { title } from "process";
import { useState } from "react"
import Herder from "../Counter/Herder"
import TododsItem from "./TododsItem"
import TodoInput from "./TodoInput"

export interface ITodoItems {
    id: number;
    title: string;
    status: boolean;
}
const Todo = () => {
    const [todos, SetTodos] = useState<ITodoItems[]>([])
    const [currId, SetCurrId] = useState(0)
    const handleAdd = (title: string) => {
        const payload = {
            title, status: false, id: Date.now()
        }
        SetTodos([...todos, payload])
    }
    const handleDelete = (id: number) => {
        SetTodos(todos.filter((task) => task.id !== id));
    }
    const handleStatus = (id: number) => {
        SetTodos(todos.map((task) => (task.id === id ? { ...task, status: !task.status } : task)));
    }
    const handleEdit = (id: number, text: string) => {



        SetTodos(todos.map((task) => (task.id === id ? { ...task, title: text } : task)));



    }


    return (
        <div>
            <Herder label="TODO" />
            <TodoInput handleAdd={handleAdd} SetCurrId={SetCurrId} currId={currId} handleEdit={handleEdit} todos={todos} />
            {
                todos.length > 0 &&
                todos.map((itm) => {
                    return <TododsItem key={itm.id} {...itm} handleDelete={handleDelete} handleStatus={handleStatus} SetCurrId={SetCurrId} />
                })
            }
        </div>
    )
}

export default Todo