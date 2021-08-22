import PropTypes from 'prop-types';

const Header = (props) => {
    const { title } = props;
    return (
        <div className="latestTweets__title">
            <h2>{title}</h2>
        </div>
    );
}

Header.propTypes = {
    title: PropTypes.string
}

export default Header;
