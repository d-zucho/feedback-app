import PropTypes from 'prop-types'

const Header = ({ text, bgColor, textColor }) => {
  const headerStyles = {
    backgroundColor: 'blue',
    color: 'white',
  }

  return (
    <header style={headerStyles}>
      <div className='container'>
        <h2>FeedBackUI</h2>
      </div>
    </header>
  )
}

Header.defaultProps = {
  text: 'FeeedBack UI',
  bgColor: 'blue',
  textColor: '#ff6a95',
}

Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
}

export default Header
