import * as React from "react"
const HiddenIcon = ({
    color = "#ffffff",
    size = 30,
    ...props
}) => {
    const pathScale = 30 / size;
    return
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        fill="none"
        {...props}
    >
        <path
            fill={color}
            transform={`scale(${1 / 1})`}
            d="M9.256 7.404a1.31 1.31 0 1 0-1.852 1.853l18.34 18.34a1.31 1.31 0 1 0 1.852-1.854l-1.93-1.93A13.119 13.119 0 0 0 30 17.5c-1.67-5.315-6.634-9.17-12.5-9.17-2.127 0-4.135.507-5.911 1.407L9.256 7.404Zm5.582 5.582 1.983 1.983a2.62 2.62 0 0 1 3.21 3.21l1.983 1.983a5.24 5.24 0 0 0-7.176-7.176Z"
        />
        <path
            fill="#fff"
            d="m20.715 26.273-3.543-3.543a5.24 5.24 0 0 1-4.902-4.902L7.46 13.017A13.074 13.074 0 0 0 5 17.5c1.67 5.315 6.634 9.17 12.5 9.17 1.11 0 2.186-.138 3.215-.398Z"
        />
    </svg>
}
export default HiddenIcon
