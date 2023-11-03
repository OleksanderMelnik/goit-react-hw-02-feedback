import PropTypes from 'prop-types';
export const Section = ({ title, children }) => {
    return (
      <>
        <div>{title}</div>
        {children}
      </>
    );
  };
  
  Section.propTypes = {
    title: PropTypes.string.isRequired,
  };