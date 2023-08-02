import * as React from 'react';
import classes from './AppButton.module.css';

interface AppButtonProps {
    isDisabled: boolean;
    onClick: () => void;
}

const AppButton = (props: React.PropsWithChildren<AppButtonProps>) => <button className={classes.main} disabled={props.isDisabled} onClick={props.onClick}>{props.children}</button>;
export default AppButton;