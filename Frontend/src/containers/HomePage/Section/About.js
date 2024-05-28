import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';


class About extends Component {

    render() {

        return (
            <div className='section about'>
                <div className='about-header'>
                    Truyền thông nói về Kiệt Bùi
                </div>
                <div className='about-content'>
                    <div className='content-left'>
                        <iframe width="100%" height="400px" src="https://www.youtube.com/embed/YK76Z_dX2sM" title="Và thế là hết - Chillies Live Acoustic in BS16 Production" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                    <div className='content-right'>
                        <p>Đêm khuya, phố xá đã chìm trong giấc ngủ, chỉ còn lại những ánh đèn đường le lói. Tôi ngồi một mình trong căn phòng nhỏ, nhìn ra khung cửa sổ. Bóng đêm bao trùm lấy mọi thứ, khiến lòng tôi càng thêm chùng xuống.

                            Tôi nhớ lại những ngày tháng hạnh phúc bên em. Chúng ta đã từng yêu nhau rất nhiều, từng trao nhau những lời hứa hẹn ngọt ngào. Nhưng rồi, mọi thứ đã thay đổi. Em rời xa tôi, đi theo người khác.

                            Tôi đã cố gắng quên em, nhưng không thể. Nỗi nhớ em cứ đeo bám lấy tôi, khiến tôi không thể nào ngủ được. Tôi cứ nghĩ về em, về những kỷ niệm mà chúng ta đã có.

                            Tôi biết, em đã hạnh phúc bên người mới. Nhưng tôi vẫn không thể nào quên em. Tôi vẫn yêu em, dù em đã không còn yêu tôi nữa.

                            Tôi ngồi trong bóng tối, lặng lẽ khóc. Nước mắt cứ chảy xuống, ướt đẫm gò má. Tôi cảm thấy vô cùng đau khổ và tuyệt vọng.

                            Đoạn văn buồn về cuộc sống

                            Cuộc sống là một chuỗi những thăng trầm, buồn vui xen lẫn. Có những lúc ta được hạnh phúc, nhưng cũng có những lúc ta phải đối mặt với nỗi buồn.

                            Tôi đã từng trải qua rất nhiều nỗi buồn trong cuộc sống. Có những nỗi buồn từ những chuyện nhỏ nhặt trong cuộc sống, nhưng cũng có những nỗi buồn từ những biến cố lớn.

                            Những nỗi buồn ấy khiến tôi cảm thấy mệt mỏi, chán chường. Tôi không muốn đối mặt với chúng, chỉ muốn trốn chạy.

                            Nhưng tôi biết, dù có muốn trốn chạy thì nỗi buồn cũng sẽ không biến mất. Tôi phải học cách chấp nhận nỗi buồn, vượt qua nỗi buồn.

                            Tôi biết, cuộc sống không phải lúc nào cũng màu hồng. Có những lúc ta phải đối mặt với những khó khăn, thử thách. Nhưng tôi tin rằng, sau mỗi nỗi buồn, ta sẽ mạnh mẽ hơn.

                            Tôi sẽ cố gắng sống tốt hơn, để nỗi buồn không còn làm tôi gục ngã.

                            Hy vọng những đoạn văn này sẽ chạm đến trái tim của bạn. Hãy chia sẻ nỗi buồn của bạn với tôi, tôi sẽ lắng nghe bạn.</p>
                    </div>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(About);
