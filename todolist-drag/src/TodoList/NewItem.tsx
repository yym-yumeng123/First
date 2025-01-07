import classNames from "classnames"
import { FC } from "react"

interface NewItemProps {
  className?: string | string[]
}

export const NewItem: FC<NewItemProps> = (props) => {
  const cs = classNames("h-200 border-2 border-black", props.className)

  return <div className={cs}></div>
}
