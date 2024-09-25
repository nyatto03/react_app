import React, { Component } from 'react';
import { connect } from 'react-redux';

import Navigator from '../../components/Navigator';
import * as actions from '../../store/actions';
import './Header.scss';
import { adminMenu } from './menuApp';

import { FormattedMessage } from 'react-intl';
import { changeLanguageApp } from '../../store/actions/appActions';
import { LANGUAGES } from '../../utils/constant';

class Header extends Component {
    changeLanguage = (language) => {
        this.props.changeLanguageAppRedux(language);
    };

    render() {
        const { processLogout, language, userInfo } = this.props;

        // let language = this.props.language;

        console.log('check ', userInfo);

        return (
            <div className="header-container">
                {/* thanh navigator */}
                <div className="header-left-content">
                    <Navigator menus={adminMenu} />
                </div>

                <div className="header-right-content">
                    <div className="welcome">
                        <FormattedMessage id="homeheader.welcome" />
                        {userInfo && userInfo.firstName
                            ? " " + userInfo.firstName
                            : ''}
                    </div>
                    <div
                        className={
                            language === LANGUAGES.VI
                                ? 'language-vi active'
                                : 'language-vi'
                        }
                    >
                        <span onClick={() => this.changeLanguage(LANGUAGES.VI)}>
                            VN
                        </span>
                    </div>
                    <div
                        className={
                            language === LANGUAGES.EN
                                ? 'language-en active'
                                : 'language-en'
                        }
                    >
                        <span onClick={() => this.changeLanguage(LANGUAGES.EN)}>
                            EN
                        </span>
                    </div>

                    {/* nút logout */}
                    <div
                        className="btn btn-logout"
                        onClick={processLogout}
                        title="Logout"
                    >
                        <i className="fas fa-sign-out-alt"></i>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
        userInfo: state.user.userInfo,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        processLogout: () => dispatch(actions.processLogout()),
        changeLanguageAppRedux: (language) =>
            dispatch(changeLanguageApp(language)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
