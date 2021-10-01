// write your custom hook here to control your checkout form
import { useState } from 'react';

const useLocalStorage = (key, initialValues) => {
    const [values, setValues] = useState(()=> {
        if (localStorage.getItem(key)) {
            return(JSON.parse(localStorage.getItem(key)));
        } else {
            localStorage.setItem(key, JSON.stringify(initialValues));
            return(initialValues);
        }
    });

    const setStoredValues = (values) => {
        localStorage.setItem(key, JSON.stringify(values));
        setValues(values);
    }
    return [values, setStoredValues];
}

export default useLocalStorage;