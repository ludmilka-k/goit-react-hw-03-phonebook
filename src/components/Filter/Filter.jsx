import PropTypes from 'prop-types';
import css from './Filter.module.css'

export const Filter = ({filter, onFilterChange }) => {
	return (
		<>
			<form className={css.filterForm}>
				<label>
					<span>Find contact by name</span>
					<input
						type="text"
						value={filter}
						onChange={onFilterChange}
						placeholder="Search by name"
						className={css.filterInput}
					/>
				</label>
			</form>
		</>
	)
}

Filter.propTypes = {
	onFilterChange: PropTypes.func.isRequired,
	filter: PropTypes.string.isRequired,

};
