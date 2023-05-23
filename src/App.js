import './App.css';
import styled, {ThemeProvider} from "styled-components";
import {ResultComponent} from "./components/results/ResultComponent";
import 'bootstrap/dist/css/bootstrap.min.css';
import Switch from "./components/switch/Switch.js";

const darkTheme = {
    body: '#1c1c1c',
    title: '#ffff',
}

const lightTheme = {
    body: '#fff',
    title: '#6200c5',
}

const StyledApp = styled.div`
  text-align: center;
  font-family: 'Roboto Mono', monospace;
  font-size: 14px;
  background-color: #ffff ;
`
const AppName = styled.h1`
  color: ${(props) => props.theme.title}
`
function App() {

    return (
        <ThemeProvider theme={lightTheme}>
            <StyledApp className="App m-4">
                <div className="mt-5">
                    <div className="row">
                        <div className="col">
                            <img src={"./logo.png"} alt="logo"/>
                        </div>
                        <div className="col-2">
                            <Switch/>
                        </div>
                    </div>
                </div>
                <div className="intro-info">
                    <AppName color={"#6200c5"}>HAVS Calculator</AppName>
                    <p className="m-4">Are you wondering how to calculate vibration exposure, for one tool and stay
                        within the legal limits?
                        Enter your tools and times below to find out. The HAVS calculator will tell you if you are
                        under or over the exposure action value, and how close you are to the limit.</p>
                </div>
                <ResultComponent/>
            </StyledApp>
        </ThemeProvider>
    );
}

export default App;
