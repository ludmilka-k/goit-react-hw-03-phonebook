import PropTypes from 'prop-types';
import css from './ContactList.module.css'

export const ContactList = ({ contacts, onRemoveContact }) => {
	return (
		<div className={css.listWrapper}>
			<ul className={css.list}>
				{contacts.map(contact => (
					<li className={css.item} key={contact.id}>
						<p>
							{contact.name}: {contact.number}
						</p>
						<button  className={css.buttonDelete} type="button" onClick={() => onRemoveContact(contact.id)}>
							Delete
						</button>
					</li>
				))}
			</ul>
		</div>
	)
}

ContactList.prototype = {
	contacts: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			number: PropTypes.string.isRequired,
		})
	).isRequired,
	onRemoveContact: PropTypes.func.isRequired,
};
