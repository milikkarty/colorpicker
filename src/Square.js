const Square = ({ colorName, hexColor, rgbaColor, isDarkText, setIsDarkText }) => {
  return (
    <section
      className="square"
      style={{
        backgroundColor: colorName,
        color: isDarkText ? '#000' : '#fff'
      }}
    >
      {/* no convertion to colorName if typed hex or rgba */}
      <p>{colorName ? colorName : 'empty'}</p>
      <p>{hexColor ? hexColor : null}</p>
      {/* rgba works funny (why?) -> */}
      <p>{rgbaColor ? rgbaColor : null}</p>
      <button
        type="button"
        onClick={() => setIsDarkText(!isDarkText)}
      ></button>
    </section>
  )
}

Square.defaultProps = {
  colorName: 'black'
}

export default Square;