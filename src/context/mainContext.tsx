import { createContext } from "react"
interface OptionsContext {
    options: {
        languages: Array<string>,
        spoken_languages: Array<string>,
    };
    setOptions?: (options: Object) => void;
}
const defaultState = {
    options: {
        languages: [],
        spoken_languages: []
    }

};
const mainContext = createContext<OptionsContext>(defaultState)
export default mainContext