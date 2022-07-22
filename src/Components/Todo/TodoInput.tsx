import { Dispatch, SetStateAction, useState } from 'react'
interface TodoInputProps {
    handleAdd: (value: string) => void;
    handleEdit: (id: number, taski: string) => void;
    currId: number;
    SetCurrId: Dispatch<SetStateAction<number>>;
    todos: {
        id: number;
        title: string;
        status: boolean;
    }[]
}
const TodoInput = ({ handleAdd, SetCurrId, currId, handleEdit, todos }: TodoInputProps) => {
    let task = todos.find((itm) => itm.id === currId)

    const [text, setText] = useState<string>('')



    const handleTextChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setText(e.target.value)
    }
    const handleAddTodo: React.MouseEventHandler<HTMLButtonElement> = () => {
        if (currId === 0) {
            handleAdd(text)
            setText("")
            SetCurrId(0);

        } else {
            console.log("ddfddddd");
            handleEdit(currId, text)
            setText("")
            SetCurrId(0)

        }
    }
    console.log(currId);

    return (
        <div>
            <input type="text" value={text ? text : task?.title} onChange={handleTextChange} />
            <button onClick={handleAddTodo}>Add</button>
        </div>
    )
}

export default TodoInput