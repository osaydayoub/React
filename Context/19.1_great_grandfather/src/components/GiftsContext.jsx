import { createContext, useState } from "react";
const GiftsContext = createContext();

export default function GiftsProvider({ children }) {
    const [gifts, setGifts] = useState(['phone', 'laptop', 'ipad']);
    return (
        <GiftsContext.Provider value={{ gifts, setGifts }}>
            {children}
        </GiftsContext.Provider>
    );
}

export { GiftsContext };