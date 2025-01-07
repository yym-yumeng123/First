import classNames from "classnames"
import { FC } from "react"

interface GarbaseProps {
  className?: string | string[]
}

export const GarbaseBin: FC<GarbaseProps> = (props) => {
  const cs = classNames("h-100 border-2 border-black", props.className)
  return <div className={cs}></div>
}
