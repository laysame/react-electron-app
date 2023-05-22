import './App.css';
import {ResultComponent} from "./components/results/ResultComponent";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useEffect, useState} from "react";
import {createTheme, ThemeProvider} from "@mui/material";

function App() {

  /*  const [isDarkMode, setIsDarkMode] = useState(false);
    const toggleTheme = () => {
        setIsDarkMode((previousMode) => !previousMode);
    };
    const theme = createTheme({
        palette: {
            mode: isDarkMode ? 'Dark' : 'light',
        },
    });

    useEffect(() => {
        const storedDarkMode = localStorage.getItem('isDarkMode');
        if (storedDarkMode !== null) {
            setIsDarkMode(JSON.parse(storedDarkMode));
        }
    }, []);*/

    return (
        //<ThemeProvider theme={theme}>
            <div className="App">
                <div className="header">
                    <img src={"./logo.png"} alt="logo"/>
                </div>
                <div className="intro-info">
                    <h1>HAVS Calculator</h1>
                    <p className="pt-2">Are you wondering how to calculate vibration exposure, for one tool or multiple
                        tools, and stay
                        within the legal
                        limits? Enter your tools and times below to find out. The HAVS calculator will tell you if you are
                        under or over
                        the exposure action value, and how close you are to the limit.</p>
                </div>
                <ResultComponent/>
            </div>
       // </ThemeProvider>
    );
}

export default App;
