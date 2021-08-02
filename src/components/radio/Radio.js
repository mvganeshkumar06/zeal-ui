import React from "react";
import { useStyleContext, useThemeContext, Span } from "../../index";

const getCheckedColor = (colors, checkedColor, theme) => {
    if (colors[checkedColor]) {
        return colors[checkedColor][3];
    }
    if (theme === "light") {
        return "black";
    }
    return "white";
};

const Radio = ({ children, checkedColor, ...rest }) => {
    const style = useStyleContext();
    const { theme } = useThemeContext();

    const styles = `
        input{
            // Hide default radio
            position: absolute;
            opacity: 0;

            & + label {
                position:relative;
                cursor: pointer;
                padding: 0;
            }

            // Radio style
            & + label:before {
                content: '';
                margin: 0.5rem 1rem 0.5rem 0rem;
                display: inline-block;
                width: 1rem;
                height: 1rem;
                background: ${theme === "light" ? "white" : style.colors.gray[4]
        };
                border: 2px solid ${theme === "light"
            ? style.colors.gray[3]
            : style.colors.gray[2]
        };
                border-radius:50%;
            }
            
            // Radio focus
            &:focus + label:before {
                outline: none;
                box-shadow: 0 0 0 2px ${theme === "light"
            ? style.colors.gray[2]
            : style.colors.gray[3]
        };
            }

            // Radio checked
            &:checked + label:before {
                background-color: ${getCheckedColor(
            style.colors,
            checkedColor,
            theme
        )};
                border-radius:50%;
            }
            
            // Label disabled
            &:disabled + label {
                color: ${theme === "light"
            ? style.colors.gray[2]
            : style.colors.gray[3]
        };
                cursor: auto;
            }

            // Radio disabled
            &:disabled + label:before {
                background: ${theme === "light"
            ? style.colors.gray[2]
            : style.colors.gray[3]
        };
            }
        }

        label{
            display:flex;
            align-items:center;
        }
    `;

    return (
        <Span customStyles={styles}>
            <input type="radio" id={children} {...rest} />
            <label htmlFor={children}>{children}</label>
        </Span>
    );
};

export default Radio;
