import * as React from 'react';
import classes from './AppButton.module.css';

interface RatioButtonProps {
    isDisabled: boolean;
    onClick: () => void;
}

const RatioButton = (props: React.PropsWithChildren<RatioButtonProps>) => <button className={classes.main} disabled={props.isDisabled} onClick={props.onClick}>{props.children}</button>;
export default RatioButton;