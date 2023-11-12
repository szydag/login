
import { createUseStyles } from "react-jss";
 const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    const input = {
        border: isFocused ? 'none' : '1px solid #ccc',
    };
const useStyles = createUseStyles({
    loginPage: {
        color: '#ffffff',
        margin: "-10px",
        padding: '60px 40px',
        height: '100vh',
        display: 'flex',
        alignItems: 'flex-start',
        gap: '64px',
        background: 'linear-gradient(113deg, #B9A675 0%, #D685D3 0%, #5CAEE9 100%)',
    },
    promotionTextsContainer: {
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0 5%',
    },
    promotionTexts: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '32px',
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
        gap: '16px',
    },
    title: {
        display: 'flex',
        alignItems: 'flex-start',
        gap: '8px',
    },
    titleText: {
        fontFamily: 'Quicksand-Regular',
        fontSize: '35px',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: 'normal',
    },
    welcomeText: {
        color: '#530094',
    },
    contentText: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex - start',
        gap: '8px',
    },
    links: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '4px',
    },
    link: {
        textDecoration: 'none',
        color: '#530094',
    },
    loginAreaContainer: {
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0 8px',
    },
    loginArea: {
        width: '80%',
        display: 'flex',
        padding: '32px',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '32px',
        border: '2px solid #FFF',
        background: 'rgba(83, 0, 148, 0.20)',
        backdropFilter: 'blur(45px)',
        gap: '16px',
    },
    header: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    container: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '24px',
        alignSelf: 'stretch',
    },
    loginMainContent: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '8px',
        alignSelf: 'stretch',
    },
    inputArea: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '16px',
    },
    mailInput: {
        display: 'flex',
        height: '25px',
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
        fontSize: '15px'

    },
    passwordInput: {
    display: 'flex',
    height: '25px',
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
    gap: '8px',
},
    loginButton: {
    width: "100%",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    borderRadius: '12px',
    background: '#530094',
},
    accountSettings: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '24px',
},
    accountSettingsTitle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '8px',
},
    socialMediaIcons: {
    display: 'flex',
    flexDirection: 'row',
    gap: '16px'
},
    newAccountArea: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: '8px',
},
})
export default useStyles;
