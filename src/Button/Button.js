import 'fundamental-styles/dist/button.css';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { BUTTON_OPTIONS, BUTTON_TYPES } from '../utils/constants';

const Button = ({
    option,
    type,
    compact,
    glyph,
    selected,
    disabled,
    typeAttr,
    onClick,
    children,
    className,
    ...props
}) => {
    const buttonClasses = classnames(
        {
            'fd-button': !option,
            [`fd-button--${option}`]: !!option,
            [`fd-button--${type}`]: !!type,
            'fd-button--compact': compact,
            [`sap-icon--${glyph}`]: !!glyph,
            'is-selected': selected,
            'is-disabled': disabled
        },
        className
    );

    return (<button {...props} className={buttonClasses}
        disabled={disabled} onClick={onClick}
        selected={selected} type={typeAttr}>
        {children}
    </button>);
};

Button.displayName = 'Button';

Button.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    compact: PropTypes.bool,
    disabled: PropTypes.bool,
    glyph: PropTypes.string,
    option: PropTypes.oneOf(BUTTON_OPTIONS),
    selected: PropTypes.bool,
    type: PropTypes.oneOf(BUTTON_TYPES),
    typeAttr: PropTypes.string,
    onClick: PropTypes.func
};

Button.propDescriptions = {
    option: 'Indicates the importance of the button.',
    selected: 'Set to **true** to set state of the button to "selected".',
    typeAttr: 'Value for the `type` attribute on the `<button>` element.'
};

export default Button;
