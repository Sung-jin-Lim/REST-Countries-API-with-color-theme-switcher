import React from 'react';

const SearchBar = (props) => {

  // input value
  // const [inputValue, setInputValue] = useState('')
  // console.log(props.inputValue)
  // prevents form from reloading page
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        <input type="search" placeholder="Search for a country" onChange={(event) => props.inputValue(event.target.value)} />
        <label for="search-bar"><ion-icon name="search-outline"></ion-icon></label>

      </form>
    </div>
  )
}
export default SearchBar;
