const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADD':
            return state.concat(action.payload);
        case 'VIDEO_FINISHED':
            return state.filter((video) => {
                return video.link !== action.payload.link
            });
        default:
            return state;
    }
};