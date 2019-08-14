
export const removeFeature = (featureObj) => {
    console.log('removeFeature action creator was invoked');
    return { type: 'REMOVE_FEATURE', payload: featureObj }
};

export const addFeature = (featureObj) => {
    console.log('addFeature action creator was invoked');
    return { type: 'ADD_FEATURE', payload: featureObj }
}
