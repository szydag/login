
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
    h1: {
        fontFamily: 'Quicksand-SemiBold',
    },
    loginPage: {
        margin: "-10px",
        height: '100vh',
        display: 'flex',
        padding: '120px 80px',
        alignItems: 'flex-start',
        gap: '80px',
        background: 'linear-gradient(113deg, #B9A675 0%, #D685D3 0%, #5CAEE9 100%)',
    },
    promotionTexts: {
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '64px',
    },
    logo: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
    },
    mainContent: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: ' center',
        alignItems: 'flex-start',
        gap: '32px',
    },
    title: {
        display: 'flex',
        alignItems: 'flex-start',
        gap: '16px',
    },
    contentText: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex - start',
        gap: '16px',
    },
    links: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '8px',
    },
    loginAreaContainer: {
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginArea: {
        display: 'flex',
        padding: '64px',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '32px',
        border: '2px solid #FFF',
        background: 'rgba(83, 0, 148, 0.20)',
        backdropFilter: 'blur(45px)',
    },
    header: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '16px',
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '48px',
        alignSelf: 'stretch',
    },
    loginMainContent: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '16px',
        alignSelf: 'stretch',
    },
    inputArea: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '32px',
        alignSelf: 'stretch',
    },
    mailInput: {
        display: 'flex',
        height: '40px',
        padding: '16px',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        borderRadius: '12px',
        border: '2px solid #FFF',
        alignSelf: 'stretch',
    },
    content: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '6px',
    },
    input: {
        width: '90%',
        height: '100%',
        border: 'none',
        background: 'rgba(255, 255, 255, 0.00)',
        color: '#530094',
        fontSize: '24px'
    },
    passwordInput: {
        display: 'flex',
        height: '40px',
        padding: '16px',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'stretch',
        borderRadius: '12px',
        border: '2px solid #FFF',
    },
    passwordSettingsArea: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        alignSelf: 'stretch',
    },
    memberMeArea: {
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
    },
    loginButton: {
        display: 'flex',
        padding: '13px 215px',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
        alignSelf: 'stretch',
        borderRadius: '12px',
        background: '#530094',
    },
    accountSettings: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '48px',
    },
    accountSettingsTitle: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '8px',
    },
    socialMediaIcons: {
        width: '140px',
        height: '31.492px',
        gap: '40px'
    },
    newAccountArea: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: '16px',
    },
})
export default useStyles;
