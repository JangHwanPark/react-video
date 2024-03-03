import {createContext, useContext} from 'react';
import FakeYoutube from "../api/fakeYoutube";
export const YoutubeApiContext = createContext();

// Youtube 인스턴스 생성
const youtube = new FakeYoutube();

export function YoutubeApiProvider({ children }) {
    return (
        <YoutubeApiContext.Provider value={{ youtube }}>
            {children}
        </YoutubeApiContext.Provider>
    );
}

export function useYoutubeApi() {
    return useContext(YoutubeApiContext);
}