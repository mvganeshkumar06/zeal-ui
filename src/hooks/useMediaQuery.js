import { useEffect, useState } from "react";

const useMediaQuery = (mediaQuery) => {
    const mql = mediaQuery.map((media) => {
        return window.matchMedia(media);
    });

    const [mediaMatches, setMediaMatches] = useState(mql);

    const handleMediaQuery = () => {
        setMediaMatches([...mediaMatches]);
    };

    useEffect(() => {
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
