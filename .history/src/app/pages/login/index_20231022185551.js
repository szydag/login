import React, { useEffect } from 'react'
import useStyles from './style';
import logo from './../../../assets/logo.png'

const LoginPage = () => {



    useEffect(() => {
        console.log(window.location.search)
    }, [window.location.search])

    return <div
        className='loginPage'
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
                    <h1>WELCOME</h1>
                    <h1>BACK!</h1>
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
                            href=""
                        >
                            Bu rastgele bir linktir tıklanabilir.
                        </a>
                        Bu rastgele bir metindir.Bu rastgele bir metindir.
                    </p>
                    <p>
                        Bu rastgele bir metindir. Bu rastgele bir metindir. Bu rastgele bir metindir.
                        <a
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
                        href="
                    
                    ">
                        Deneme Linki
                    </a>
                    <a
                        href="
                    
                    ">
                        Privacy Policy
                    </a>
                </div>

            </div>
        </div>
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

                            </div>
                            <div
                                className={classes.inputTitle}
                            >

                            </div>
                        </div>
                        <div
                            className={classes.passwordInput}
                        >
                            <div
                                className={classes.content}
                            >

                            </div>
                            <div
                                className={classes.inputTitle}
                            >

                            </div>

                        </div>
                    </div>
                    <div
                        className={classes.passwordSettingsArea}
                    >
                        <div
                            className={classes.memberMeArea}
                        >

                        </div>
                    </div>
                </div>
                <div
                    className={classes.loginButton}
                >

                </div>
            </div>
            <div
                className={classes.accountSettings}
            >
                <div
                    className={classes.accountSettingsTitle}
                >

                </div>
                <div
                    className={classes.socialMediaIcons}
                >

                </div>
                <div
                    className={classes.newAccountArea}
                >

                </div>
            </div>
        </div>
    </div>
}

export default LoginPage;
