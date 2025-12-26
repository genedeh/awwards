import type { ReactNode } from "react"

interface Props {
    id: string
    title: string
    containerClass?: string
    leftIcon?: ReactNode
    rightIcon?: ReactNode

}
const Button = ({ title, id, containerClass, leftIcon, rightIcon }: Props) => {
    return (
        <button id={id}
            className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-(--violet-50) text-black px-7 py-3 ${containerClass}`}>
            {leftIcon}
            <span className="relative incline-flex overflow-hidden font-(--font-general) text-xs uppercase">{title}</span>
            {rightIcon}
        </button>
    )
}

export default Button