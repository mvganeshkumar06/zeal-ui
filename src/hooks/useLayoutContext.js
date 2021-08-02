import { useContext } from "react";
import LayoutContext from "../context/LayoutContext";

const useLayoutContext = () => {
    return useContext(LayoutContext);
};

export default useLayoutContext;
