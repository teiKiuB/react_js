import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';


class Footer extends Component {

    render() {

        return (
            <div className='home-footer'>
                <p>&copy; 2023 Bùi Tuấn Kiệt.More information <a target="_blank" href='https://www.facebook.com/kiettuanbui0/'>click here</a></p>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
