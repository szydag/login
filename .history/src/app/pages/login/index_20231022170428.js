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
                        className={classes.promotionTexts}
                    >

                    </div>
                    <div
                        className={classes.promotionTexts}
                    >

                    </div>
                </div>

            </div>
        </div>
        <div
            className={classes.loginArea}
        >

        </div>
    </div>
}

export default LoginPage;
