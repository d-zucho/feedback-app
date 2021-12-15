import PropTypes from 'prop-types'

const FeedbackStats = ({ feedback }) => {
  // the 0 is the initialValue  it is used  to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
  let average =
    feedback.reduce((accumelator, current) => {
      return accumelator + current.rating
    }, 0) / feedback.length

  // makes average only have one decimal point and if its a 0, like 9.0, it gets rid of itppp
  average = average.toFixed(1).replace(/[.,]0$/, '')

  return (
    <div className='feedback-stats'>
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}

FeedbackStats.propTypes = {
  feedback: PropTypes.array.isRequired,
}

export default FeedbackStats
