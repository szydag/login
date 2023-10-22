import * as React from "react"
const MailIcon = ({
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
            d="m15.714 19.527-3.542-3.543a5.24 5.24 0 0 1-4.902-4.902L2.46 6.271A13.074 13.074 0 0 0 0 10.754c1.67 5.315 6.634 9.17 12.5 9.17 1.11 0 2.186-.138 3.214-.397Z"
        />
    </svg>
}
export default MailIcon
