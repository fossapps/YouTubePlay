const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADD':
            return state.concat(action.payload);
            break;
        case 'VIDEO_FINISHED':
            console.log(action.payload, state);
            return state.filter((video) => {
                return video.link !== action.payload.link
            });
            break;
        default:
            return state;
    }
};