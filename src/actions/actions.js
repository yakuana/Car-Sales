
export const removeFeature = (featureName) => {
    console.log('removeFeature action creator was invoked');
    return { type: 'REMOVE_FEATURE', payload: featureName }
};

export const addFeature = (featureName) => {
    console.log('removeFeature action creator was invoked');
    return { type: 'ADD_FEATURE', payload: featureName}
}
