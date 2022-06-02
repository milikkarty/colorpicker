const Square = ({ colorName }) => {
  return (
    <section
      className="square"
      style={{ backgroundColor: colorName }}
    >
      <p>{colorName ? colorName : 'empty'}</p>
    </section>
  )
}

Square.defaultProps = {
  colorName: 'black'
}

export default Square;