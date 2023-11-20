import PropTypes from 'prop-types';

TabContent.propTypes = {
    title: PropTypes.string,
    pargraph: PropTypes.string,
};

export default function TabContent({ title, pargraph }) {
    return (
        <div className='tab-content'>
            <h1>{title}</h1>
            <p>{pargraph}</p>
        </div>
    );
}