import "./css/style.css";
import Head from './components/Header/Head';
import Navigation from './components/Navigation/Navigation';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import { Route, Routes } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = (props) => {
	return (
		<div className="app-wrapper">
			<Head />
			<Navigation />
			<div className="app__content">
				<div className="app__content-wrapper">
					<Routes>
						<Route path='/profile' element={<Profile store={props.store} state={props.store.getState()} />} />
						<Route path='/dialogs/*' element={<Dialogs store={props.store} state={props.store.getState()} />} />
						<Route path='/news' element={<News />} />
						<Route path='/music' element={<Music />} />
						<Route path='/settings' element={<Settings />} />
					</Routes>
				</div>
			</div>
		</div>
	);
}

export default App;
