import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, positivePercentage, total }) => {
  return (
    <div>
      <span>Good:{good}</span>
      <span>Neutral:{neutral}</span>
      <span>Bad:{bad}</span>
      <span>total:{total}</span>
      <span> positivePercentage :{positivePercentage}%</span>
    </div>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
}.isRequired;
