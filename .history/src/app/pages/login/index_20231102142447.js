import React, { useEffect } from 'react'
import useStyles from './style';
import logo from './../../../assets/logo.png'
import MailIcon from './../../../assets/svgr/mailIcon/index.js'
import PasswordIcon from './../../../assets/svgr/passwordIcon/index.js'
import HiddenIcon from './../../../assets/svgr/hiddenIcon/index.js'
import UnhiddenIcon from './../../../assets/svgr/unhiddenIcon/index.js'
import GoogleIcon from './../../../assets/svgr/googleIcon/index.js'
import FacebookIcon from './../../../assets/svgr/facebookIcon/index.js'
import LinkedInIcon from './../../../assets/svgr/linkedInIcon/index.js'
const LoginPage = () => {

    const classes = useStyles();
    return <div
        className={classes.loginPage}
    >
        <div
            className={classes.promotionTextsContainer}
        >
            <div
                className={classes.promotionTexts}
            >
                <div
                    className={classes.logo}
                >
                    <img
                        src={logo}
                        alt=""
                    />
                </div>
                <div
                    className={classes.mainContent}
                >
                    <div
                        className={classes.title}
                    >
                        <h1
                            className={`${classes.titleText} ${classes.welcomeText}`}
                        >
                            WELCOME
                        </h1>
                        <h1
                            className={`${classes.titleText} ${classes.backText}`}
                        >
                            BACK!
                        </h1>
                    </div>
                    <div
                        className={classes.contentText}
                    >
                        <p>
                            Bu rastgele bir metindir. Bu rastgele bir metindir. Bu rastgele bir metindir. Bu rastgele bir metindir.Bu rastgele bir metindir.Bu rastgele bir metindir.
                        </p>
                        <p>
                            Bu rastgele bir metindir. Bu rastgele bir metindir. Bu rastgele bir metindir.
                            <a
                                className={classes.link}
                                href=""
                            >
                                Bu rastgele bir linktir tıklanabilir.
                            </a>
                            Bu rastgele bir metindir.Bu rastgele bir metindir.
                        </p>
                        <p>
                            Bu rastgele bir metindir. Bu rastgele bir metindir. Bu rastgele bir metindir.
                            <a
                                className={classes.link}
                                href=""
                            >
                                Bu rastgele bir linktir tıklanabilir.
                            </a>
                            Bu rastgele bir metindir.Bu rastgele bir metindir.
                        </p>
                    </div>
                    <div
                        className={classes.links}
                    >
                        <a
                            className={classes.link}
                            href=""
                        >
                            Deneme Linki
                        </a>
                        <a
                            className={classes.link}
                            href=""
                        >
                            Privacy Policy
                        </a>
                    </div>

                </div>
            </div>
        </div>
        <div
            className={classes.loginAreaContainer}
        >
            <div
                className={classes.loginArea}
            >
                <div
                    className={classes.header}
                >
                    <h2>LOGIN</h2>
                    <h5>Please login to your account</h5>
                </div>
                <div
                    className={classes.container}
                >
                    <div
                        className={classes.loginMainContent}
                    >
                        <div
                            className={classes.inputArea}
                        >
                            <div
                                className={classes.mailInput}
                            >

                                <div
                                    className={classes.content}
                                >
                                    <MailIcon
                                        color='#ffffff'
                                        size={30}
                                    />
                                    <input
                                        className={classes.input}
                                        type="text"
                                        placeholder='example@gmail.com'
                                    />
                                </div>
                            </div>
                            <div
                                className={classes.passwordInput}
                            >
                                <div
                                    className={classes.content}
                                >
                                    <PasswordIcon
                                        color='#ffffff'
                                        size={30}
                                    />
                                    <input
                                        className={classes.input}
                                        type="password"
                                        placeholder='********'
                                    />
                                    <HiddenIcon
                                        color='#ffffff'
                                        size={30}
                                    />
                                </div>
                            </div>
                        </div>
                        <div
                            className={classes.passwordSettingsArea}
                        >
                            <div
                                className={classes.memberMeArea}
                            >
                                <h5>Member Me</h5>
                            </div>
                            <h5>
                                <a
                                    className={classes.link}
                                    href="">
                                    Forget Password
                                </a>
                            </h5>
                        </div>
                    </div>
                    <div
                        className={classes.loginButton}
                    >
                        <h3>Login</h3>
                    </div>
                </div>
                <div
                    className={classes.accountSettings}
                >
                    <div
                        className={classes.accountSettingsTitle}
                    >
                        Or login with social media
                    </div>
                    <div
                        className={classes.socialMediaIcons}
                    >
                        <GoogleIcon
                            color='#ffffff'
                            size={30}
                        />
                        <FacebookIcon
                            color='#ffffff'
                            size={30}
                        />
                        <LinkedInIcon
                            color='#ffffff'
                            size={30}
                        />
                    </div>
                    <div
                        className={classes.newAccountArea}
                    >
                        <span>
                            Don't have an account?
                        </span>
                        <a
                            className={classes.link}
                            href="">
                            Create
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default LoginPage;
