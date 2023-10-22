
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    loginPage: {
        display: 'flex',
        padding: '120px 80px',
        alignItems: 'flex-start',
        gap: '80px',
        background: 'linear-gradient(113deg, #B9A675 0%, #D685D3 0%, #5CAEE9 100%)',
    },
    promotionTexts: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '64px',
        flex: '1 0 0',
        alignSelf: 'stretch',
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
        alignSelf: 'stretch',
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
        alignSelf: 'stretch',
    },
    links: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '8px',
    },
    loginArea: {
        display: 'flex',
        padding: '64px',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '48px',
        alignSelf: 'stretch',
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
        height: '64px',
        padding: '16px',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: '437px',
        alignSelf: 'stretch',
        borderRadius: '12px',
        border: '2px solid #FFF',
    },
    content: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '6px',
    },
    inputTitle: {
        display: 'flex',
        padding: '0px 10px',
        alignItems: 'center',
        gap: '10px',
        position: 'absolute',
        left: '37px',
        top: '-12px',
    },
    passwordInput: {
        display: 'flex',
        height: '64px',
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
    },
    loginButton: {
    },
    accountSettings: {
    },
    accountSettingsTitle: {
    },
    socialMediaIcons: {
    },
    newAccountArea: {
    },
})
export default useStyles;
