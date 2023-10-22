import * as React from "react"
const GoogleIcon = ({
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
            d="M30.5 16.357c0 8.698-5.957 14.889-14.754 14.889A15.228 15.228 0 0 1 .5 16 15.228 15.228 0 0 1 15.746.754c4.106 0 7.561 1.506 10.223 3.99l-4.15 3.99C16.392 3.496 6.298 7.43 6.298 16c0 5.318 4.248 9.627 9.449 9.627 6.037 0 8.3-4.328 8.656-6.572h-8.656v-5.243H30.26c.142.78.24 1.53.24 2.545Z"
        />
    </svg>
}
export default GoogleIcon
