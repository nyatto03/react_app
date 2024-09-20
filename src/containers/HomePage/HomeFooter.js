import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeFooter.scss';
// import { FormattedMessage } from 'react-intl';

// import Slider from 'react-slick';

class HomeFooter extends Component {
    render() {
        return (
            <footer class="footer">
                <div class="container">
                    <div class="row">
                        <div class="col company-info">
                            <h4>Công ty Cổ phần Công nghệ BookingCare</h4>
                            <p>
                                Lô B4/D21, Khu đô thị mới Cầu Giấy, Phường Dịch
                                Vọng Hậu, Quận Cầu Giấy, Thành phố Hà Nội, Việt
                                Nam
                            </p>
                            <p>
                                ĐKKD số. 0106790291. Sở KHĐT Hà Nội cấp ngày
                                16/03/2015
                            </p>
                            <p>
                                Điện thoại:{' '}
                                <a href="tel:02473012468">024-7301-2468</a> (7h
                                - 18h)
                            </p>
                            <p>
                                Email:{' '}
                                <a href="mailto:support@bookingcare.vn">
                                    support@bookingcare.vn
                                </a>{' '}
                                (7h - 18h)
                            </p>
                        </div>
                        <div class="col office-info">
                            <h4>Văn phòng tại TP Hồ Chí Minh</h4>
                            <p>
                                Tòa nhà H3, 384 Hoàng Diệu, Phường 6, Quận 4,
                                TP.HCM
                            </p>
                        </div>
                        <div class="col partners">
                            <h4>Đối tác bảo trợ nội dung</h4>
                            <p>Hello Doctor</p>
                            <p>
                                Bảo trợ chuyên mục nội dung "sức khỏe tinh thần"
                            </p>
                            <p>Hệ thống y khoa chuyên sâu quốc tế Bernard</p>
                            <p>
                                Bảo trợ chuyên mục nội dung "y khoa chuyên sâu"
                            </p>
                            <p>Doctor Check - Tầm Soát Bệnh Để Sống Thọ Hơn</p>
                            <p>
                                Bảo trợ chuyên mục nội dung "sức khỏe tổng quát"
                            </p>
                        </div>
                        <div class="col download-info">
                            <h4>
                                Tải ứng dụng BookingCare cho điện thoại hoặc máy
                                tính bảng:
                            </h4>
                            <p>
                                <a href="/">Android</a> -{' '}
                                <a href="/">iPhone/iPad</a> -{' '}
                                <a href="/">Khác</a>
                            </p>
                        </div>
                    </div>
                    <div class="row footer-links">
                        <ul>
                            <li>
                                <a href="/">Liên hệ hợp tác</a>
                            </li>
                            <li>
                                <a href="/">Chính sách bảo mật</a>
                            </li>
                            <li>
                                <a href="/">Quy chế hoạt động</a>
                            </li>
                            <li>
                                <a href="/">Tuyển dụng</a>
                            </li>
                            <li>
                                <a href="/">Điều khoản sử dụng</a>
                            </li>
                            <li>
                                <a href="/">Câu hỏi thường gặp</a>
                            </li>
                        </ul>
                    </div>
                    <div class="footer-credits">
                        <p>© 2024 BookingCare.</p>
                    </div>
                </div>
            </footer>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
