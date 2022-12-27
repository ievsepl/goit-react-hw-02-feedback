import PropTypes from 'prop-types';

const FeedbackOpt = ({ onChoiceFeedback, options }) => {
  return (
    <div>
      {options.map(option => {
        return (
          <button key={option} type="button" onClick={onChoiceFeedback}>
            {option.slice(0, 1).toUpperCase() + option.slice(1, option.length)}
          </button>
        );
      })}
    </div>
  );
};
export default FeedbackOpt;

FeedbackOpt.propTypes = {
  onChoiceFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,

  // options: PropTypes.arrayOf({
  //   option: PropTypes.string.isRequired,
  // }).isRequired,
}.isRequired;
