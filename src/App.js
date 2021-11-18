import "./css/style.css";
import Head from './components/Header/Head';
import Navigation from './components/Navigation/Navigation';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = (props) => {
	return (
		<BrowserRouter>
			<div className="app-wrapper">
				<Head />
				<Navigation />
				<div className="app__content">
					<div className="app__content-wrapper">
						<Routes>
							<Route path='/profile' element={<Profile DATAProfile={props.DATA.profilePage} AddPost={props.AddPost} ChangeAddPost={props.ChangeAddPost} />} />
							<Route path='/dialogs/*' element={<Dialogs DATAMessages={props.DATA.messagesPage} AddMessage={props.AddMessage} ChangeAddMessage={props.ChangeAddMessage} />} />
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
