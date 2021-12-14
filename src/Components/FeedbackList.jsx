import FeedbackItem from './FeedbackItem'
import PropTypes from 'prop-types'

const FeedbackList = ({ feedback }) => {
  console.log(feedback)

  if (!feedback || feedback.length === 0) {
    return <p>No Feedback available</p>
  }
  return (
    <div className='feedback-list'>
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} />
      ))}
    </div>
  )
}

FeedbackList.propTypes = {
  feedback: PropTypes.array.isRequired,
}

export default FeedbackList
