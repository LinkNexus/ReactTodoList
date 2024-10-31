import {useState} from "react";

/**
 * @param {boolean} initialValue
 */
export default function (initialValue = false) {
    const [state, setState] = useState(initialValue);
    const toggle = () => setState((value) => !value);
    return [state, toggle];
}