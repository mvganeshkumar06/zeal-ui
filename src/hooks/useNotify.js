import { useState } from "react";

const useNotify = () => {
    const [isOpen, setIsOpen] = useState("");

    const onOpen = (notifyName) => {
        setIsOpen(notifyName);
    };

    const onClose = () => {
        setIsOpen("");
    };

    return { isOpen, onOpen, onClose };
};

export default useNotify;
