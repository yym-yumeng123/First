import { FC } from "react"
import classNames from "classnames"
import { GarbaseBin } from "./GarbageBin"
import { List } from "./List"
import { NewItem } from "./NewItem"

interface TodoListProps {}

export const TodoList: FC<TodoListProps> = (props) => {
  return (
    <div className='w-1000 h-600 m-auto mt-100 p-10 border-2 border-black flex justify-between items-start'>
      <div className='flex-2 h-full mr-10 overflow-auto'>
        <List />
      </div>
      <div className={classNames(
        "flex-1 h-ful",
        "flex flex-col justify-start"
      )}>
        <NewItem />
        <GarbaseBin className={"mt-10"} />
      </div>
    </div>
  )
}
