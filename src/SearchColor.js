const SearchColor = ({ colorName, setColorName }) => {
  return (
    <form className="search" onSubmit={(e) => e.preventDefault()}>
        <label>Add color:</label>
        <input
            autoFocus
            autoComplete="off"
            placeholder="Add color"
            required
            role="searchbox"
            type="text"
            value={colorName}
            onChange={(e) => setColorName(e.target.value)}
        />
    </form>
  )
}

export default SearchColor