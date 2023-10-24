import LoginPage from "./pages/login";
import useStyles from "./style";

const App = () => {
    const classes = useStyles();
    return <div
        className={classes.main}
    >
        <LoginPage />
    </div>

};

export default App;
