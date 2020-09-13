import PropTypes from 'prop-types';

export const argument = PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
});

const args = PropTypes.arrayOf(argument);

export const method = PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.string,
    arguments: args
});