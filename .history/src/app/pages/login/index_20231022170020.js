import React, { useEffect } from 'react'
import useStyles from './style';

const LoginPage = () => {



  useEffect(() => {
    console.log(window.location.search)
  }, [window.location.search])

  return <div
    className={classes.loginPage}
  >
  </div>
}

export default LoginPage;
