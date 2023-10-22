import * as React from "react"
const HiddenIcon = ({
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
            d="M0 5.03C.801 2.115 3.185 0 6 0s5.199 2.115 6 5.03c-.801 2.915-3.185 5.03-6 5.03S.801 7.945 0 5.03Zm8.515 0C8.515 6.617 7.39 7.904 6 7.904c-1.39 0-2.515-1.287-2.515-2.874C3.485 3.443 4.61 2.156 6 2.156c1.39 0 2.515 1.287 2.515 2.874Z"
        />
    </svg>
}
export default HiddenIcon
