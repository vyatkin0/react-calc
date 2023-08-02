import * as React from 'react';
import classes from './AppCheckBox.module.css';

interface CheckBoxProps {
    id?: string;
    checked?: boolean;
    onChange?: (v: boolean) => void;
}

const CheckBox = (props: React.PropsWithChildren<CheckBoxProps>) => <div className={classes.main}>
    <input type="checkbox" id={props.id} name={props.id} checked={props.checked} onChange={(e) => props.onChange?.(!props.checked)} />
    {props.children && <label htmlFor={props.id}>{props.children}</label>}
</div>;

export default CheckBox;