import * as React from 'react';
import classes from './AppField.module.css';
import CancelIcon from './CancelIcon';

interface AppFieldProps {
    id?: string;
    value?: string;
    placeholder?: string;
    title?: string;
    onChange?: (v: string) => void;
}

const AppField = (props: AppFieldProps) => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    function handleClear(e: React.MouseEvent) {
        props.onChange?.('');
    }

    function onClick(e: React.MouseEvent) {
        if (e.currentTarget == e.target) {
            (e.currentTarget.firstChild as HTMLInputElement)?.focus();
        }
    }

    const spanStyle: React.CSSProperties = {
        visibility: props.value ? 'visible' : 'hidden',
    };

    return <div className={classes.main} onClick={onClick}>
        <input
            id={props.id}
            name={props.id}
            type='text'
            onChange={(e) => props.onChange?.(e.target.value)}
            value={props.value}
            placeholder={props.placeholder}
        />
        {props.value && <label htmlFor={props.id} className={classes.label}>{props.title}</label>}
        <span style={spanStyle} className={classes.actions} onClick={props.value ? handleClear : undefined}>
            {CancelIcon}
        </span>
    </div>;
}
export default AppField;