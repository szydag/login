import * as React from "react"
const LinkedInIcon = ({
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
            d="M28.357.754H2.637C1.456.754.5 1.725.5 2.917v25.674c0 1.192.958 2.163 2.136 2.163h25.721c1.179 0 2.143-.97 2.143-2.163V2.917c0-1.192-.964-2.163-2.143-2.163ZM9.567 26.468H5.121V12.151h4.453v14.317h-.007ZM7.344 10.196a2.58 2.58 0 0 1 0-5.156 2.584 2.584 0 0 1 2.578 2.578 2.575 2.575 0 0 1-2.578 2.578Zm18.89 16.272h-4.446v-6.964c0-1.66-.034-3.797-2.31-3.797-2.317 0-2.672 1.808-2.672 3.677v7.084h-4.447V12.151h4.266v1.956h.06c.596-1.125 2.05-2.31 4.212-2.31 4.5 0 5.337 2.966 5.337 6.823v7.848Z"
        />
    </svg>
}
export default LinkedInIcon
