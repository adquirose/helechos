
// eslint-disable-next-line react/prop-types
function Title({text}) {
  return (
    <div className="title-container">
        <h2 className="title">{text}</h2>
        <div className="line"/>
    </div>
  )
}

export default Title