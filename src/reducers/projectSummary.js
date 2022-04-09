import { RECEIVE_PROJECTSUMMARY } from '../actions/index'

export function projectSummary(state = {}, action) {
    switch (action.type) {
        case RECEIVE_PROJECTSUMMARY:
            return {
                ...state,
                ...action.projectSummary}
        default:
            return state
    }

}

export default projectSummary