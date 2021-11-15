import { rerenderEntireTree } from './../render';

let DATA = {
	profilePage: {
		posts: [
			{
				id: 1,
				text: 'Hello! How are you?',
				likes: '10'
			},
			{
				id: 2,
				text: 'This is my first post!',
				likes: '8'
			}
		]
	},
	messagesPage: {
		contacts: [
			{
				id: 1,
				name: 'Anton'
			},
			{
				id: 2,
				name: 'Ivan'
			},
			{
				id: 3,
				name: 'Helen'
			},
			{
				id: 4,
				name: 'Stepan'
			},
			{
				id: 5,
				name: 'Maksim'
			}
		],
		dialogs: [
			{
				id: 1,
				name: 'Anton',
				message: "I am so fed in my knowledge that I seem to have a hundred trillion billions of years living on trillions and\
		trillions of the same planets like this earth, I absolutely\
		clear, and I'm looking for only one - peace, peace and\
		Here is this harmony, from confusion with infinitely eternal, from contemplation\
		great fractal similarity and from this wonderful unity\
		creatures..."
			},
			{
				id: 2,
				name: 'Igor',
				message: "Started..."
			},
			{
				id: 3,
				name: 'Anton',
				message: "And you again with me\
		your own here, go fuss further, this is your distribution, it\
		Your way and your horizon of knowledge and feeling of your nature, he\
		incommensurately chalk compared to mine, do you understand?"
			},
			{
				id: 4,
				name: 'Igor',
				message: "Okay, silently, silently !!!"
			},
			{
				id: 5,
				name: 'Anton',
				message: "I\'m going to admire the universe, and you are walking to be presented in the edges of some,\
		That\'s the whole difference, you know, you do not know this eternal endless, you don\'t need it!"
			}
		]
	}
}

export let addPost = (postMessage) => {
	let newPost = {
		id: 5,
		text: postMessage,
		likes: 0
	}

	DATA.profilePage.posts.push(newPost);
	rerenderEntireTree(DATA);
}

export let addMessage = (message) => {
	let newMessage = {
		id: 6,
		name: 'Anton',
		message: message,
	}

	DATA.messagesPage.dialogs.push(newMessage);
	rerenderEntireTree(DATA);
}
export default DATA;