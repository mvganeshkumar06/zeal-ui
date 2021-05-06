import { useContext } from "react";
import StyleContext from "../context/StyleContext";

const useStyleContext = () => {
    return useContext(StyleContext);
};

export default useStyleContext;
