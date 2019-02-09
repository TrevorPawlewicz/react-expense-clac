// SET_TEXT_FILTER: set empty string if no arg value is passed into function
export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

// SORT_BY_DATE: set a variable that implicitly returns an object
export const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

// SORT_BY_AMOUNT: set a variable that implicitly returns an object
export const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});

// SET_START_DATE: set a variable that implicitly returns an object
export const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
});

// SET_START_DATE: set a variable that implicitly returns an object
export const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
});