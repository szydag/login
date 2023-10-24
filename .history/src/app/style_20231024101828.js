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
    header1: {
        fontFamily: "Quicksand-Light",
        fontWeight: 300,
        lineHeight: 1.3,
        fontSize: 48
    },
    header2: {
        fontFamily: "Quicksand-Regular",
        fontWeight: 400,
        lineHeight: 1.3,
        fontSize: 32
    },
    header3: {
        fontFamily: "Quicksand-Medium",
        fontWeight: 500,
        lineHeight: 1.3,
        fontSize: 26
    },
    header4: {
        fontFamily: "Quicksand-Regular",
        fontWeight: 400,
        lineHeight: 1.3,
        fontSize: 22
    },
    header5: {
        fontFamily: "Quicksand-SemiBold",
        fontWeight: 600,
        lineHeight: 1.3,
        fontSize: 22
    },
    header6: {
        fontFamily: "Quicksand-Regular",
        fontWeight: 400,
        lineHeight: 1.3,
        fontSize: 18
    },
    main: {
        width: '100vw',
        height: '100vh',
    },
})
export default useStyles;
