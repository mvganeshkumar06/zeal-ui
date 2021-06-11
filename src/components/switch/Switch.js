import React from "react";
import style from "../../style/Style";
import { useThemeContext, Span } from "../../index";

const getTrackColor = (colors, trackColor, theme) => {
    if (colors[trackColor]) {
        return colors[trackColor][3];
    }
    if (theme === "light") {
        return colors.gray[2];
    }
    return colors.gray[3];
};

const Switch = ({ trackColor, ...rest }) => {
    const { theme } = useThemeContext();

    const styles = `
        .switch {
            position:relative;
            display: inline-block;
            width:3rem;
            height:1.5rem;
        }

        .switch input{
            opacity: 0;
            width: 0;
            height: 0;
        }

        .slider{
            cursor: pointer;
            position:absolute;
            top:0;
            left:0;
            right:0;
            bottom:0;
            border-radius:0.25rem;
            background-color: ${theme === "light" ? style.colors.gray[1] : style.colors.gray[2]
        };
            transition: 0.4s;
        }
        
        .slider:before {
            position:absolute;
            content: "";
            width:1rem;
            height:1rem;
            top:4px;
            left:4px;
            bottom:4px;
            border-radius:0.25rem;
            background-color: white;
            transition: 0.4s;
        }

        input:checked + .slider {
            background-color:${getTrackColor(style.colors, trackColor, theme)};
        }

        input:checked + .slider:before{
            transform: translateX(1.5rem);
        }

        input:disabled + .slider{
            cursor:not-allowed;
        }
    `;

    return (
        <Span customStyles={styles}>
            <label className="switch">
                <input type="checkbox" {...rest} />
                <span className="slider"></span>
            </label>
        </Span>
    );
};

export default Switch;
