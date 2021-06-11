import { useEffect, useState } from "react";

const useMediaQuery = (mediaQuery) => {
    const [mediaMatches, setMediaMatches] = useState([]);

    useEffect(() => {

        const mql = mediaQuery.map((media) => {
            return window.matchMedia(media);
        });

        setMediaMatches(mql);

        const handleMediaQuery = () => {
            setMediaMatches([...mediaMatches]);
        };

        mql.forEach((media) => {
            media.addEventListener("change", handleMediaQuery);
        });

        return () => {
            mql.forEach((media) => {
                media.removeEventListener("change", handleMediaQuery);
            });
        };

    }, []);

    return mediaMatches.map((media) => media.matches);
};

export default useMediaQuery;
