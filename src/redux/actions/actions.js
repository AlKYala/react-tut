export const setMyText = (text) => {
    const valueObj = {type: "SET_MY_TEXT" /* MUSS UEBEREINSTIMMEN MIT REDUCER  */, payload: text};
    return valueObj;
};

export const setCounter = (counter) => {
    const valueObj = {type: "SET_COUNTER" /* MUSS UEBEREINSTIMMEN MIT REDUCER  */, payload: counter};
    return valueObj;
};
