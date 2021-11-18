import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { state } from './redux/state';


let rerenderEntireTree = (DATA) => {
	ReactDOM.render(
		<React.StrictMode>
			<App DATA={DATA.getDATA()} AddPost={state.addPost.bind(state)} ChangeAddPost={state.changeAddPost.bind(state)} AddMessage={state.addMessage.bind(state)} ChangeAddMessage={state.changeAddMessage.bind(state)} />
		</React.StrictMode>,
		document.getElementById('root')
	);
}

rerenderEntireTree(state)

state.handler(rerenderEntireTree)

