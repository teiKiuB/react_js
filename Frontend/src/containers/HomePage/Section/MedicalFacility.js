import React, { Component } from 'react';
import { connect } from 'react-redux';
import './MedicalFacility.scss'
import Slider from "react-slick";
import { FormattedMessage } from 'react-intl';

class MedicalFacility extends Component {

    render() {

        return (
            <div className='section medical-facility'>
                <div className='section-container'>
                    <div className='section-header'>
                        <span className='title-section'>Cơ sở y tế nổi bất</span>
                        <button className='btn-section'>Xem thêm</button>
                    </div>
                    <div className='section-body'>
                        <Slider {...this.props.settings}>
                            <div className='section-custom'>
                                <div className='bg-img medical-facility'></div>
                                <div>Cơ sở trung an 1</div>
                            </div>
                            <div className='section-custom'>
                                <div className='bg-img medical-facility'></div>
                                <div>Cơ sở trung an 2</div>
                            </div>
                            <div className='section-custom'>
                                <div className='bg-img medical-facility'></div>
                                <div>Cơ sở trung an 3</div>
                            </div>
                            <div className='section-custom'>
                                <div className='bg-img medical-facility'></div>
                                <div>Cơ sở trung an 4</div>
                            </div>
                            <div className='section-custom'>
                                <div className='bg-img medical-facility'></div>
                                <div>Cơ sở trung an 5</div>
                            </div>
                            <div className='section-custom'>
                                <div className='bg-img medical-facility'></div>
                                <div>Cơ sở trung an 6</div>
                            </div>
                        </Slider>
                    </div>

                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MedicalFacility);
