import { useState } from 'react'
import Button from './Button'
import RatingSelect from './RatingSelect'

import Card from './shared/Card'

const FeedbackForm = () => {
  const [text, setText] = useState('')
  const [rating, setRating] = useState('')
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')

  const handleTextChange = (e) => {
    if (text === '') {
      setBtnDisabled(true)
      setMessage(null)
    } else if (text !== '' && text.trim().length <= 10) {
      setBtnDisabled(true)
      setMessage('Input must be more than 10 characters')
    } else {
      setMessage(null)
      setBtnDisabled(false)
    }
    setText(e.target.value)
  }
  // @todo - create handleSubmit handler
  const handleSubmit = (e) => {
    e.preventDefault()

    // making sure input > 10
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      }
      console.log(newFeedback)
    }
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate us?</h2>
        <RatingSelect select={() => setRating(rating)} />
        <div className='input-group'>
          <input
            type='text'
            placeholder='Write a review'
            onChange={handleTextChange}
            value={text}
          />
          <Button type='submit' isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm
