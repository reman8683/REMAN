import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./page/Home";
import {BottomLinkList, Discord, Github, Instagram, Twitch, Youtube} from "./page/components/BottomLinkList";
import Api from "./page/Api";
import Program from "./page/Program";
import NotFound from "./page/NotFound";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/api" element={<Api />} />
                <Route path="/program" element={<Program />} />

                <Route path="/youtube" element={<Youtube />} />
                <Route path="/twitch" element={<Twitch />} />
                <Route path="/github" element={<Github />} />
                <Route path="/discord" element={<Discord />} />
                <Route path="/instagram" element={<Instagram />} />

                <Route path={"*"} element={<NotFound />}/>
            </Routes>
            <BottomLinkList/>
        </div>
    );
}

export default App;
