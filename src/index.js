import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import DATA from "./redux/state"
import { addPost, addMessage, handler, changeNewPost, changeNewMessage } from './redux/state'


let rerenderEntireTree = (DATA) => {
	ReactDOM.render(
		<React.StrictMode>
			<App DATA={DATA} addPost={addPost} addMessage={addMessage} changeNewPost={changeNewPost} changeNewMessage={changeNewMessage} />
		</React.StrictMode>,
		document.getElementById('root')
	);
}

rerenderEntireTree(DATA)

handler(rerenderEntireTree)

