import PropTypes from 'prop-types'

const Card = ({ children, reverse }) => {
  return (
    <div>
      <p className={`card ${reverse && 'reverse'}`}>{children}</p>
    </div>
  )
}

Card.defaultProps = {
  reverse: false,
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
}

export default Card
