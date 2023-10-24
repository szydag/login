import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    "@font-face": [
        {
            fontFamily: "Quicksand-Bold",
            src: 'url("/public/assets/fonts/Quicksand-Bold.ttf")',
            fontStyle: "normal"
        },
        {
            fontFamily: "Quicksand-Light",
            src: 'url("/public/assets/fonts/Quicksand-Light.ttf")',
            fontStyle: "normal"
        },
        {
            fontFamily: "Quicksand-Medium",
            src: 'url("/public/assets/fonts/Quicksand-Medium.ttf")',
            fontStyle: "normal"
        },
        {
            fontFamily: "Quicksand-Regular",
            src: 'url("/public/assets/fonts/Quicksand-Regular.ttf")',
            fontStyle: "normal"
        },
        {
            fontFamily: "Quicksand-SemiBold",
            src: 'url("/public/assets/fonts/Quicksand-SemiBold.ttf")',
            fontStyle: "normal"
        }
    ],
    main: {
        width: '100vw',
        height: '100vh',
    },
})
export default useStyles;
