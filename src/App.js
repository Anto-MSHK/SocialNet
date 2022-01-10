import "./css/style.css";
import Navigation from './components/Navigation/Navigation';
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import UsersContainer from './components/Users/UsersContainer';
import HeadContainer from './components/Header/HeadContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import { Route, Routes } from "react-router-dom";
import Login from './components/Login/Login';

const App = (props) => {
	return (
		<div className="app-wrapper">
			<HeadContainer />
			<Navigation />
			<div className="app__content">
				<div className="app__content-wrapper">
					<Routes>
						<Route exact path='/' element={<ProfileContainer />} />
						<Route exact path='/login' element={<Login />} />
						<Route path='/profile/*' element={<ProfileContainer />} />
						<Route path='/dialogs/*' element={<Dialogs />} />
						<Route path='/news' element={<News />} />
						<Route path='/music' element={<Music />} />
						<Route path='/settings' element={<Settings />} />
						<Route path='/users/*' element={<UsersContainer />} />
					</Routes>
				</div>
			</div>
		</div >
	);
}

export default App;
