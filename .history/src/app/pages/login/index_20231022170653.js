import React, { useEffect } from 'react'
import useStyles from './style';

const LoginPage = () => {



    useEffect(() => {
        console.log(window.location.search)
    }, [window.location.search])

    return <div
        className={classes.loginPage}
    >
        <div
            className={classes.promotionTexts}
        >
            <div
                className={classes.logo}
            >

            </div>
            <div
                className={classes.mainContent}
            >
                <div
                    className={classes.title}
                >

                </div>
                <div
                    className={classes.contentText}
                >

                </div>
                <div
                    className={classes.links}
                >
                    <div
                        className={classes.link}
                    >

                    </div>
                    <div
                        className={classes.link}
                    >

                    </div>
                </div>

            </div>
        </div>
        <div
            className={classes.loginArea}
        >
            <div
                className={classes.header}
            >

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

                    </div>
                    <div
                        className={classes.passwordSettingsArea}
                    >

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

            </div>
        </div>
    </div>
}

export default LoginPage;
