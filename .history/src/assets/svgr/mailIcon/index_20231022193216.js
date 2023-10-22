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
            transform={`scale(${1 / 1})`}
            d="M19.894 6.125c-3.807-3.661-9.98-3.661-13.788 0s-3.808 9.597 0 13.258c3.31 3.183 8.41 3.6 12.187 1.248.753-.47 1.759-.263 2.247.461.488.725.273 1.692-.48 2.161-5.038 3.138-11.837 2.586-16.252-1.66-5.077-4.881-5.077-12.796 0-17.678 5.076-4.881 13.308-4.881 18.384 0C24.73 6.355 26 9.558 26 12.755c0 2.588-2.183 4.687-4.875 4.687a4.982 4.982 0 0 1-2.925-.937c-1.186 1.517-3.074 2.5-5.2 2.5-3.59 0-6.5-2.799-6.5-6.25 0-3.453 2.91-6.25 6.5-6.25s6.5 2.797 6.5 6.25c0 .862.727 1.562 1.625 1.562s1.625-.7 1.625-1.563c0-2.402-.952-4.798-2.856-6.629Zm-3.644 6.63c0-1.727-1.455-3.126-3.25-3.126s-3.25 1.4-3.25 3.125c0 1.726 1.455 3.125 3.25 3.125s3.25-1.399 3.25-3.125Z"
        />
    </svg>
}
export default MailIcon
