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



    useEffect(() => {
        console.log(window.location.search)
    }, [window.location.search])

    return <div
        className='loginPage'
    >
        <div
            className='promotionTexts'
        >
            <div
                className='logo'
            >
                <img
                    src={logo}
                    alt=""
                />
            </div>
            <div
                className='mainContent'
            >
                <div
                    className='title'
                >
                    <h1>WELCOME</h1>
                    <h1>BACK!</h1>
                </div>
                <div
                    className='contentText'
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
                    className='links'
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
            className='loginArea'
        >
            <div
                className='header'
            >
                <h2>LOGIN</h2>
                <h5>Please login to your account</h5>
            </div>
            <div
                className='container'
            >
                <div
                    className='loginMainContent'
                >
                    <div
                        className='inputArea'
                    >
                        <div
                            className='mailInput'
                        >
                            <div
                                className='content'
                            >
                                <MailIcon
                                    color='#ffffff'
                                    size={30}
                                ></MailIcon>

                            </div>
                            <div
                                className='inputTitle'
                            >
                                <h5>Your E-mail  Address</h5>
                            </div>
                        </div>
                        <div
                            className='passwordInput'
                        >
                            <div
                                className='content'
                            >

                            </div>
                            <div
                                className='inputTitle'
                            >

                            </div>

                        </div>
                    </div>
                    <div
                        className='passwordSettingsArea'
                    >
                        <div
                            className='memberMeArea'
                        >

                        </div>
                    </div>
                </div>
                <div
                    className='loginButton'
                >

                </div>
            </div>
            <div
                className='accountSettings'
            >
                <div
                    className='accountSettingsTitle'
                >

                </div>
                <div
                    className='socialMediaIcons'
                >

                </div>
                <div
                    className='newAccountArea'
                >

                </div>
            </div>
        </div>
    </div>
}

export default LoginPage;
