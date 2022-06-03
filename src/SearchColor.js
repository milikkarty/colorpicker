import colorNames from 'colornames';
import colorToRGBA from 'color-to-rgba';

const SearchColor = ({ colorName, setColorName, setHexColor, setRgbaColor }) => {
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
            onChange={(e) => {
              setColorName(e.target.value);
              setHexColor(colorNames(e.target.value));
              setRgbaColor(colorToRGBA(e.target.value));
            }}
        />
    </form>
  )
}

export default SearchColor