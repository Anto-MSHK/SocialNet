import "./css/style.css";
import Head from './components/header/Head';
import Navigation from './components/navigation/Navigation';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/dialogs/Dialogs";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import News from "./components/news/News";
import Music from "./components/music/Music";
import Settings from "./components/settings/Settings";

const App = () => {
	return (
		<BrowserRouter>
			<div className="app-wrapper">
				<Head />
				<Navigation />
				<div className="app__content">
					<div className="app__content-wrapper">
						<Routes>
							<Route path='/profile' element={<Profile />} />
							<Route path='/dialogs/*' element={<Dialogs />} />
							<Route path='/news' element={<News />} />
							<Route path='/music' element={<Music />} />
							<Route path='/settings' element={<Settings />} />
						</Routes>
					</div>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
