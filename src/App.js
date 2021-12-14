import Header from './Components/Header'
import FeedbackList from './Components/FeedbackList'
import FeedbackData from './data/FeedbackData'

// Hooks
import { useState } from 'react'

const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData)

  return (
    <>
      <Header text='Hello World' />
      <div className='container'>
        <FeedbackList feedback={feedback} />
      </div>
    </>
  )
}

export default App
