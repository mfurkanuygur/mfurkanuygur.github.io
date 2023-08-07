import { ErrorMessage } from 'formik';
import PropTypes from 'prop-types'
import './error.css'

const Error = ({ name }) => {
  return (
    <>
      <ErrorMessage name={name} className='main-error'>
        {errorMessage => (
          <div className="error-message">
            <span>{errorMessage}</span>
          </div>
        )}
      </ErrorMessage>
    </>
  );
};

export default Error;

Error.propTypes = {
  name: PropTypes.string
}