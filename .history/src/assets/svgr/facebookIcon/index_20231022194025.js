import * as React from "react"
const FacebookIcon = ({
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
            transform={`scale(${1 / 1})`}
            d="M30.5 15.754c0-8.286-6.714-15-15-15s-15 6.714-15 15c0 7.487 5.485 13.692 12.656 14.819V20.09h-3.81v-4.336h3.81V12.45c0-3.759 2.238-5.835 5.666-5.835 1.641 0 3.358.293 3.358.293v3.689h-1.892c-1.863 0-2.444 1.156-2.444 2.343v2.815h4.16l-.666 4.336h-3.494v10.483C25.014 29.446 30.5 23.24 30.5 15.754Z"
        />
    </svg>
}
export default FacebookIcon
