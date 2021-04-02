import './styles.css'

export const SearchInput = ({searchValue, handleChange}) => (
    <input
    className='search-input'
    value={searchValue}
    onChange={handleChange}
    type='search'
    placeholder='Search'
  />
)