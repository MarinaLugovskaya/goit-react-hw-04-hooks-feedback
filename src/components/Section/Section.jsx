import PropTypes from 'prop-types';

export default function section({ title, children }) {
  return (
    <section>
      <h1>{title}</h1>
      {children}
    </section>
  );
}

section.propTypes = {
  title: PropTypes.string,
};
