const colorPalette = {
    gray: {
        1: "#F2F4F8",
        2: "#E4E8F1",
        3: "#384957",
        4: "#28343E",
        5: "#181F25",
    },
    red: {
        1: "#F58E8E",
        2: "#F26969",
        3: "#EF4444",
        4: "#EB1E1E",
        5: "#CE1212",
    },
    yellow: {
        1: "#FBF0B2",
        2: "#F8E88B",
        3: "#F6E05E",
        4: "#F4D93E",
        5: "#F2D118",
    },
    blue: {
        1: "#8AB5F9",
        2: "#639CF8",
        3: "#3B82F6",
        4: "#156BF4",
        5: "#0A58D6",
    },
    orange: {
        1: "#FBDAB1",
        2: "#F9C78B",
        3: "#F6AD55",
        4: "#F5A23D",
        5: "#F39016",
    },
    green: {
        1: "#B0E8C5",
        2: "#90DFAE",
        3: "#68D391",
        4: "#51CD80",
        5: "#37BE6B",
    },
    purple: {
        1: "#E6DAFB",
        2: "#CDB6F7",
        3: "#B590F3",
        4: "#9C6CEF",
        5: "#8347EB",
    },
    pink: {
        1: "#FCD9E7",
        2: "#F9B3CF",
        3: "#F687B3",
        4: "#F4679F",
        5: "#F24087",
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
