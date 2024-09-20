import React, { Component } from 'react';
import { connect } from 'react-redux';
import './About.scss';
// import { FormattedMessage } from 'react-intl';

// import Slider from 'react-slick';

class About extends Component {
    render() {
        return (
            <div className="section section-about">
                <div className="section-container">
                    <div className="section-header">
                        <span className="title-section">
                            Truyền thông nói về BookingCare
                        </span>
                        <button className="btn-section">Xem thêm</button>
                    </div>
                    <div className="section-about-content">
                        <div className="content-left">
                            <iframe
                                src="https://www.youtube.com/embed/FyDQljKtWnI"
                                title="CÀ PHÊ KHỞI NGHIỆP VTV1 - BOOKINGCARE - HỆ THỐNG ĐẶT LỊCH KHÁM TRỰC TUYẾN"
                                allowfullscreen
                            ></iframe>
                        </div>
                        <div className="content-right">thông tin mô tả..</div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.user.isLoggedIn,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
