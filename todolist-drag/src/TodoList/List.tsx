import classNames from "classnames"
import { FC } from "react"

interface ListProps {
  className?: string | string[]
}

export const List: FC<ListProps> = (props) => {
  const cs = classNames("h-full border-2 border-black", props.className)

  return <div className={cs}></div>
}
