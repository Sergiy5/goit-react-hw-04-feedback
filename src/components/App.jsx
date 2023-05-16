import { useState } from 'react';
import PropTypes from 'prop-types'
import SectionWraper from './MainSection/section-title';
import FeedbackOptions from './FeedbackOptions/feedbackOptions';
import Statistics from './Statistics/statistics';
import Notification from './Notification/notification';


const OPTIONS = ["good", "neutral", "bad"]

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedback = (e) => {
    const currentBtn = e.target.name
    if (currentBtn === 'good') {
      setGood(prevState => prevState + 1)
    }
    if (currentBtn === 'neutral') {
      setNeutral(prevState => prevState + 1);
    }
    if (currentBtn === 'bad') {
      setBad(prevState => prevState + 1);
    }
  } 

  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  };
 const countPositiveFeedbackPercentage = () => {
   const positivePercentage = Number(
     ((100 * good) / countTotalFeedback()).toFixed()
   );
   return positivePercentage;
 };

    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <SectionWraper title="Please leave feadback">
          <FeedbackOptions options={OPTIONS} onLeaveFeedback={handleFeedback} />
        
          {countTotalFeedback() > 0 ? <Statistics            
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
            : <Notification message="There is no feedback"/>}
          </SectionWraper>
      </div>
    );
}

export default App;

 App.propTypes = {
   good: PropTypes.number,
   neutral: PropTypes.number,
   bad: PropTypes.number,
 };
