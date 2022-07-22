import { Dispatch, SetStateAction } from "react";

interface ITodoItemProps {
  id: number;
  title: string;
  status: boolean;
  handleDelete: (id: number) => void;
  handleStatus:(id:number) =>void;
  SetCurrId: Dispatch<SetStateAction<number>>;

}
const TododsItem = ({ id, title, status, handleDelete, handleStatus, SetCurrId }: ITodoItemProps) => {
  const handleDeleteTodo: React.MouseEventHandler<HTMLButtonElement> = () => {
    handleDelete(id)
  }
  const handleSetCurrId: React.MouseEventHandler<HTMLButtonElement> = () => {
    SetCurrId(id)

  }
  const handleStatusChange: React.ChangeEventHandler<HTMLInputElement> = () => {
    handleStatus(id)
  }
  return (
    <>
      <div >
        <input type="checkbox" onChange={handleStatusChange} />
        <span style={status? { textDecoration: "line-through" } : {} }>{title}</span>
        <button onClick={handleDeleteTodo}>DELETE</button>
        <button onClick={handleSetCurrId}>EDIT</button>
      </div>
    </>
  )
}

export default TododsItem