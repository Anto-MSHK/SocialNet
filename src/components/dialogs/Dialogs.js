import React from 'react'
import ContactItem from './contactItem/ContactItem'
import MessageItem from './dialogItem/DialogItem'

const Dialogs = () => {

	let contacts_data = [
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
	]

	let contacts_elements = contacts_data.map(contact => (<ContactItem userName={contact.name} id={contact.id} />))

	let dialogs_sms = [
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

	let dialog_elements = dialogs_sms.map(sms => (<MessageItem userName={sms.name} message={sms.message} />))


	return (
		<div className="dialogs">
			<div className="dialogs__contact-list">
				<h1>Contacts</h1>

				{contacts_elements}

			</div>
			<div className="dialogs__sms-list">
				<h1>Messages</h1>

				{dialog_elements}

			</div>
		</div>
	)
}

export default Dialogs
