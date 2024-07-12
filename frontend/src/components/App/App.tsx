import {Sidebar} from "../Sidebar/Sidebar.tsx";
import {Routes, Route} from 'react-router-dom';
import {MainScreen} from "../MainScreen/MainScreen.tsx";
import {Search} from "../Search/Search.tsx";

export default function App() {
    return (
        <div className="row g-0">
            <div className="col-xl-2 col-12">
                <Sidebar/>
            </div>
            <div className="col-xl-10 col-12 p-4 main-screen ">
                <Routes>
                    <Route path="/" element={<MainScreen/>}/>
                    <Route path="/search" element={<Search/>}/>
                </Routes>
            </div>
        </div>
    )
}

