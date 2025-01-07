import { FC } from "react"

interface TodoListProps {}

export const TodoList: FC<TodoListProps> = (props) => {
  return (
    <div className='w-1000 h-600 m-auto mt-100 p-10 border-2 border-black flex justify-between items-start'>
      <div className='flex-2 h-full mr-10 bg-blue-400 overflow-auto'></div>
      <div className='flex-1 h-full bg-blue-400'></div>
    </div>
  )
}
