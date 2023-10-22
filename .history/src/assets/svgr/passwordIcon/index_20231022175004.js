import * as React from "react"
const PasswordIcon = ({
    color = "#ffffff",
    size = 30,
    ...props
}) => {
    const pathScale = 30 / size;
    return <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        fill="none"
        {...props}
    >
        <path
            fill={color}
            transform={`scale(${1 / pahtScale})`}
            d="M25 9.63a9.375 9.375 0 0 1-12.098 8.972L9.375 22.13H6.25v3.125H0v-6.25l6.652-6.652A9.375 9.375 0 1 1 25 9.63Zm-9.375-6.25a1.563 1.563 0 0 0 0 3.124c1.726 0 3.125 1.4 3.125 3.125a1.563 1.563 0 0 0 3.125 0 6.25 6.25 0 0 0-6.25-6.25Z"
        />
    </svg>
}
export default PasswordIcon

