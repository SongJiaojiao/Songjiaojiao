import { getInitialData } from '../utils/api'
import { receiveUsers,receiveQuestions,receiveProjectsummary } from '../actions/index'
import { showLoading, hideLoading } from 'react-redux-loading-bar'


export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading())
        return getInitialData()
            .then(({ users, questions,projectSummary }) => {
                dispatch(receiveUsers(users))
                dispatch(receiveQuestions(questions))
                dispatch(receiveProjectsummary(projectSummary))
                dispatch(hideLoading())
               
                
            })
    }
}
