import './App.css';
import {ResultComponent} from "./components/results/ResultComponent";
import 'bootstrap/dist/css/bootstrap.min.css';
import SunIcon from "./components/icons/SunIcon";
import MoonIcon from "./components/icons/MoonIcon";
import Switch from "./components/switch/Switch.js";

function App() {

    return (
            <div className="App m-4">
                <div className="mt-5">
                    <img src={"./logo.png"} alt="logo"/>
                </div>
                <div className="intro-info">
                    <h1>HAVS Calculator</h1>
                    <p className="m-4">Are you wondering how to calculate vibration exposure, for one tool or multiple
                        tools, and stay
                        within the legal
                        limits? Enter your tools and times below to find out. The HAVS calculator will tell you if you are
                        under or over
                        the exposure action value, and how close you are to the limit.</p>
                </div>
                <ResultComponent/>
                <SunIcon/>
                <Switch />
                <MoonIcon />
            </div>
    );
}

export default App;
