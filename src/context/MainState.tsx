import { useState, FunctionComponent } from "react";
import MainContext from './mainContext';
type optionsType = {
    languages: Array<string>,
    spoken_languages: Array<string>,
};
export const MainState: FunctionComponent = ({ children }) => {
    const [options, setOptions] = useState<any>({
        languages: [],
        spoken_languages: []
    })
    return (
        <MainContext.Provider value={{
            options,
            setOptions
        }}>
            {children}
        </MainContext.Provider>
    )
}