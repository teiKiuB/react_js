import actionTypes from './actionTypes';
import { DeleteUserService, EditUserService, SaveDetailDoctorService, createNewUserSerVice, getAllCodeService, getDoctorsServive, getTopDoctorHomeServive, getUsers } from '../../services/userService';
import { toast } from 'react-toastify';

export const fetchGenderStart = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({
                type: actionTypes.FETCH_GENDER_START
            })
            let res = await getAllCodeService("GENDER");
            if (res && res.errCode === 0) {
                dispatch(fetchGenderSuccess(res.data))
            } else {
                dispatch(fetchGenderFailed());
            }
        } catch (e) {
            dispatch(fetchGenderFailed());
            console.log('fetchGender error:', e);
        }
    }
}


export const fetchGenderSuccess = (genderData) => ({
    type: actionTypes.FETCH_GENDER_SUCCESS,
    data: genderData
})

export const fetchGenderFailed = () => ({
    type: actionTypes.FETCH_GENDER_FAILED
})

export const fetchPositionStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllCodeService("POSITION");
            if (res && res.errCode === 0) {
                dispatch(fetchPositionSuccess(res.data))
            } else {
                dispatch(fetchPositionFailed());
            }
        } catch (e) {
            dispatch(fetchPositionFailed());
            console.log('fetchPosition error:', e);
        }
    }
}

export const fetchPositionSuccess = (positionData) => ({
    type: actionTypes.FETCH_POSITION_SUCCESS,
    data: positionData
})

export const fetchPositionFailed = () => ({
    type: actionTypes.FETCH_POSITION_FAILED
})

export const fetchRoleStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllCodeService("ROLE");
            if (res && res.errCode === 0) {
                dispatch(fetchRoleSuccess(res.data))
            } else {
                dispatch(fetchRoleFailed());
            }
        } catch (e) {
            dispatch(fetchRoleFailed());
            console.log('fetchRole error:', e);
        }
    }
}

export const fetchRoleSuccess = (roleData) => ({
    type: actionTypes.FETCH_ROLE_SUCCESS,
    data: roleData
})

export const fetchRoleFailed = () => ({
    type: actionTypes.FETCH_ROLE_FAILED
})

export const createNewUser = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await createNewUserSerVice(data);
            if (res && res.errCode === 0) {
                dispatch(createUserSucess());
                dispatch(fetchAllUserStart());
                toast.success('Create new user succeed!')
            } else {
                dispatch(createUserFailed());
                alert(res.errMessage)
            }
        } catch (e) {
            dispatch(createUserFailed());
            console.log('createUserFailed error:', e);
        }
    }
}

export const createUserSucess = () => ({
    type: actionTypes.CREATE_USER_SUCCESS
})

export const createUserFailed = () => ({
    type: actionTypes.CREATE_USER_FAILED
})

export const fetchAllUserStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getUsers("ALL");
            if (res && res.errCode === 0) {
                dispatch(fetchAllUserSuccess(res.users.reverse()))
            } else {
                dispatch(fetchAllUserFailed());
                toast.error('fetch all user error!')
            }
        } catch (e) {
            dispatch(fetchAllUserFailed());
            toast.error('fetch all user error!')
            console.log('fetchAllUser error:', e);
        }
    }
}

export const fetchAllUserSuccess = (data) => ({
    type: actionTypes.FETCH_ALL_USER_SUCCESS,
    users: data
})

export const fetchAllUserFailed = () => ({
    type: actionTypes.FETCH_ALL_USER_FAILED
})

export const deleteUser = (userId) => {
    return async (dispatch, getState) => {
        try {
            let res = await DeleteUserService(userId);
            if (res && res.errCode === 0) {
                dispatch(deleteUserSucess());
                dispatch(fetchAllUserStart());
                toast.success('Delete the user succeed!')
            } else {
                dispatch(deleteUserFailed());
                toast.error('Delete the user error!')
            }
        } catch (e) {
            dispatch(deleteUserFailed());
            toast.error('Delete the user error!')
            console.log('deleteUserFailed error:', e);
        }
    }
}

export const deleteUserSucess = () => ({
    type: actionTypes.DELETE_USER_SUCCESS
})

export const deleteUserFailed = () => ({
    type: actionTypes.DELETE_USER_SUCCESS
})

export const editUser = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await EditUserService(data);
            if (res && res.errCode === 0) {
                dispatch(editUserSucess());
                dispatch(fetchAllUserStart());
                toast.success('Update the user succeed!')
            } else {
                dispatch(editUserFailed());
                toast.error('Update the user error!')
            }
        } catch (e) {
            dispatch(editUserFailed());
            toast.error('Update the user error!')
            console.log('deleteUserFailed error:', e);
        }
    }
}

export const editUserSucess = () => ({
    type: actionTypes.EDIT_USER_SUCCESS
})

export const editUserFailed = () => ({
    type: actionTypes.EDIT_USER_FAILED
})

export const fetchTopDoctor = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getTopDoctorHomeServive('');
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_TOP_DOCTOR_SUCCESS,
                    data: res.data
                })
            } else {
                dispatch({
                    type: actionTypes.FETCH_TOP_DOCTOR_FAILED,
                })
            }
        } catch (e) {
            console.log('FETCH_TOP_DOCTOR_FAILED:', e);
            dispatch({
                type: actionTypes.FETCH_TOP_DOCTOR_FAILED,
            })
        }
    }
}

export const fetchAllDoctor = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getDoctorsServive();
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_GET_DOCTORS_SUCCESS,
                    data: res.data
                })
            } else {
                dispatch({
                    type: actionTypes.FETCH_GET_DOCTORS_FAILED,
                })
            }
        } catch (e) {
            console.log('FETCH_GET_DOCTOR_FAILED:', e);
            dispatch({
                type: actionTypes.FETCH_GET_DOCTORS_FAILED,
            })
        }
    }
}

export const saveDetailDoctor = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await SaveDetailDoctorService(data);
            if (res && res.errCode === 0) {
                toast.success('Save infor detail doctor succeed!')
                dispatch({
                    type: actionTypes.SAVE_DETAIL_DOCTOR_SUCCESS,
                })
            } else {
                console.log('err res', res);
                toast.error('Save infor detail doctor error!')

                dispatch({
                    type: actionTypes.SAVE_DETAIL_DOCTOR_FAILED,
                })
            }
        } catch (e) {
            toast.error('Save infor detail doctor error!')

            console.log('SAVE_DETAIL_DOCTOR_FAILED:', e);
            dispatch({
                type: actionTypes.SAVE_DETAIL_DOCTOR_FAILED,
            })
        }
    }
}