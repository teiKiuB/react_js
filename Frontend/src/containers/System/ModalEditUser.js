import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { emitter } from '../../utils/emitter';
import _ from 'lodash'
class ModalEditUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: ''
        }
    }

    handleOnChangeInput = (event, id) => {
        let copy = { ...this.state };
        copy[id] = event.target.value;
        this.setState({
            ...copy
        })
    }

    checkValidateInput = () => {
        let isValid = true;
        let arrInput = ['email', 'password', 'firstName', 'lastName', 'address'];
        for (let i = 0; i < arrInput.length; i++) {
            if (!this.state[arrInput[i]]) {
                isValid = false;
                alert('Missing parameter:' + arrInput[i]);
                break
            }
        }
        return isValid;
    }

    componentDidMount() {
        let user = this.props.currentUser;
        if (user && !_.isEmpty(user)) {
            this.setState({
                id: user.id,
                email: user.email,
                password: '********',
                firstName: user.firstName,
                lastName: user.lastName,
                address: user.address
            })
        }
    }

    toggle = () => {
        this.props.toggleEditUserModal();
    }

    handleSaveUser = () => {
        let isValid = this.checkValidateInput();
        if (isValid === true) {
            //call API edit user
            this.props.editUser(this.state);
        }
    }

    render() {
        return (
            <Modal
                isOpen={this.props.isOpen}
                toggle={() => { this.toggle() }}
                className={'modal-user-container'}
                size='lg'
            >
                <ModalHeader toggle={() => { this.toggle() }}>Edit User</ModalHeader>
                <ModalBody>
                    <div className='modal-user-body'>
                        <div className='input-container'>
                            <label>Email</label>
                            <input type='text'
                                value={this.state.email}
                                disabled
                                onChange={(event) => { this.handleOnChangeInput(event, "email") }}></input>
                        </div>
                        <div className='input-container'>
                            <label>Password</label>
                            <input type='password'
                                value={this.state.password}
                                disabled
                                onChange={(event) => { this.handleOnChangeInput(event, "password") }}></input>
                        </div>
                        <div className='input-container'>
                            <label>First name</label>
                            <input type='text'
                                value={this.state.firstName}
                                onChange={(event) => { this.handleOnChangeInput(event, "firstName") }}></input>
                        </div>
                        <div className='input-container'>
                            <label>Last name</label>
                            <input type='text'
                                value={this.state.lastName}
                                onChange={(event) => { this.handleOnChangeInput(event, "lastName") }}></input>
                        </div>
                        <div className='input-container max-w-input'>
                            <label>Address</label>
                            <input type='text'
                                value={this.state.address}
                                onChange={(event) => { this.handleOnChangeInput(event, "address") }}></input>
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" className='px-3' onClick={() => { this.handleSaveUser() }}>
                        Save
                    </Button>{' '}
                    <Button color="secondary" className='px-3' onClick={() => { this.toggle() }}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        )
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalEditUser);
