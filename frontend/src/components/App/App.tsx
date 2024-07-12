import {Sidebar} from "../Sidebar/Sidebar.tsx";
import {Routes, Route} from 'react-router-dom';
import {MainScreen} from "../MainScreen/MainScreen.tsx";

export default function App() {
    return (
        <div className="row g-0">
            <div className="col-xl-2 col-12">
                <Sidebar/>
            </div>
            <div className="col-xl-2 col-12">
                <Routes>
                    <Route path="/" element={<MainScreen/>}/>
                </Routes>
            </div>
        </div>
    )
}

