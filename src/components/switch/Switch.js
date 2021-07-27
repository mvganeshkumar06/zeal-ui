import React from "react";
import style from "../../style/Style";
import { useThemeContext, Span } from "../../index";

const getTrackColor = (colors, trackColor, theme) => {
    if (colors[trackColor]) {
        return colors[trackColor][3];
    }
    if (theme === "light") {
        return colors.gray[3];
    }
    return colors.gray[4];
};

const Switch = ({ trackColor, onChange, checked }) => {
    const { theme } = useThemeContext();

    const styles = `
        margin:0.25rem 0rem;

        .switch {
            position:relative;
            display:inline-block;
            width:2.5rem;
            height:1.5rem;
        }

        .switch input{
            opacity:0;
            width:0;
            height:0;
        }

        .slider{
            cursor:pointer;
            position:absolute;
            top:0;
            left:0;
            right:0;
            bottom:0;
            border:1px solid ${theme === "light" ? "black" : "white"};
            border-radius:${style.common.borderRadius};
            background-color:${theme === "light" ? style.colors.gray[2] : style.colors.gray[3]};
            transition:0.4s;
        }
        
        .slider:before {
            position:absolute;
            content:"";
            width:0.75rem;
            height:0.75rem;
            top:4px;
            left:4px;
            bottom:4px;
            border:1px solid ${theme === "light" ? "black" : "white"};
            border-radius:${style.common.borderRadius};
            background-color:white;
            transition:0.4s;
        }

        input:checked + .slider {
            background-color:${getTrackColor(style.colors, trackColor, theme)};
        }

        input:checked + .slider:before{
            transform:translateX(1rem);
        }

        input:disabled + .slider{
            cursor:not-allowed;
        }
    `;

    return (
        <Span customStyles={styles}>
            <label className="switch">
                <input type="checkbox" checked={checked} onChange={onChange} />
                <span className="slider"></span>
            </label>
        </Span>
    );
};

export default Switch;
