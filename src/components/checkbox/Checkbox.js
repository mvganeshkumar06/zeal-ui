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

const Checkbox = ({ children, checkedColor, ...rest }) => {
    const style = useStyleContext();
    const { theme } = useThemeContext();

    const styles = `
        input{
            // Hide default checkbox
            position: absolute;
            opacity: 0;

            & + label {
                position:relative;
                cursor: pointer;
                padding: 0;
            }

            // Checkbox style
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
                border-radius:0.25rem;
            }
            
            // Checkbox focus
            &:focus + label:before {
                outline: none;
                box-shadow: 0 0 0 2px ${theme === "light"
            ? style.colors.gray[2]
            : style.colors.gray[3]
        };
            }

            // Checkbox checked
            &:checked + label:before {
                background: ${getCheckedColor(
            style.colors,
            checkedColor,
            theme
        )};
            }
            
            // Label disabled
            &:disabled + label {
                color: ${theme === "light"
            ? style.colors.gray[2]
            : style.colors.gray[3]
        };
                cursor: auto;
            }

            // Checkbox disabled
            &:disabled + label:before {
                background: ${theme === "light"
            ? style.colors.gray[2]
            : style.colors.gray[3]
        };
            }

            // Checkmark
            &:checked + label:after {
                content: '';
                width: 5px;
                height: 10px;
                position:absolute;
                top:10px;
                left:6px;
                border:solid ${theme === "light" ? "white" : "black"};
                border-width: 0 3px 3px 0;
                transform: rotate(45deg);
            }
        }

        label{
            display:flex;
            align-items:center;
        }
    `;

    return (
        <Span customStyles={styles}>
            <input type="checkbox" id={children} {...rest} />
            <label htmlFor={children}>{children}</label>
        </Span>
    );
};

export default Checkbox;
