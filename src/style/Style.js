const colorPalette = {
    gray: {
        0: "#c1d5e0",
        1: "#a7c0cd",
        2: "#29434e",
        3: "#1c313a",
        4: "#102027",
    },
    red: {
        1: "#feb2b2",
        2: "#fc8181",
        3: "#f56565",
        4: "#c53030",
    },
    orange: {
        1: "#fbd38d",
        2: "#f6ad55",
        3: "#ed8936",
        4: "#c05621",
    },
    green: {
        1: "#c6f6d5",
        2: "#9ae6b4",
        3: "#68d391",
        4: "#2f855a",
    },
    blue: {
        1: "#90cdf4",
        2: "#63b3ed",
        3: "#4299e1",
        4: "#2b6cb0",
    },
    purple: {
        1: "#d6bcfa",
        2: "#b794f4",
        3: "#9f7aea",
        4: "#6b46c1",
    },
    pink: {
        1: "#fbb6ce",
        2: "#f687b3",
        3: "#ed64a6",
        4: "#b83280",
    },
};

const style = {
    common: {
        padding: "0.5rem",
        margin: "0.5rem",
        border: `1px solid ${colorPalette.gray[3]}`,
        borderRadius: "0.25rem",
        boxShadow: `1px 1px 2px ${colorPalette.gray[3]}`,
    },
    colors: {
        ...colorPalette,
    },
    zIndex: {
        auto: "auto",
        0: 0,
        1: 10, // Floating btns, Badges
        2: 20, // Bg overlay, Navigation
        3: 30, // Modal backdrop
        4: 40, // Modal, Toast
    },
};

export default style;
