import * as React from 'react';
import classes from './Message.module.css';

type MessageType = 'none' | 'info' | 'error';

export interface MessageProps {
    type: MessageType;
    text: string;
    title: string;
    onKeyDown?: (e: React.KeyboardEvent) => void;
    onClick?: (e: React.MouseEvent) => void;
}

const Message = (props: MessageProps) => <div className={classes.main + ' ' + classes[props.type]} tabIndex={0} onClick={props.onClick} onKeyDown={props.onKeyDown}>
    <span className={classes.title}>{props.title}</span>
    {props.text}
</div>;

export default Message;
