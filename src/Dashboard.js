import React, { useState } from 'react';

import { CTX } from './Store';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 2),
        margin: '50px',

        [theme.breakpoints.down('sm')]: {
            margin: '0px',
            padding: '10px',
            backgroundColor: 'lightGray',
        },
    },
    flex: {
        display: 'flex',
        alignItems: 'center',
        padding: '5px',
    },
    topicsWindow: {
        width: '30%',
        height: '400px',
        borderRight: '1px solid gray',
    },
    chatWindow: {
        width: '70%',
        height: '400px',
        padding: '20px',
        overflow: 'auto',
    },
    chatBox: {
        backgroundColor: '#dcedc8',
        width: '85%',
    },
    button: {
        width: '15%',
    },
    listItem: {
        padding: '5px',
    },
}));

const Dashboard = () => {
    const classes = useStyles();

    // CTX store
    const { state, sendChatAction, user } = React.useContext(CTX);

    const topics = Object.keys(state);

    // local state
    const [activeTopic, changeActiveTopic] = useState(topics[0]);
    const [textValue, changeTextValue] = useState('');

    return (
        <div className={classes.root}>
            <Paper elevation={3}>
                <Typography variant="h2" gutterBottom>
                    Chat app
                </Typography>
                <Typography variant="h4" gutterBottom>
                    {activeTopic}
                </Typography>
                <div className={classes.flex}>
                    <div className={classes.topicsWindow}>
                        <List>
                            {topics.map(topic => (
                                <ListItem
                                    onClick={e =>
                                        changeActiveTopic(e.target.innerText)
                                    }
                                    key={topic}
                                    button
                                >
                                    <ListItemText primary={topic} />
                                </ListItem>
                            ))}
                        </List>
                    </div>
                    <div className={classes.chatWindow}>
                        {state[activeTopic].map((chat, index) => (
                            <div className={classes.flex} key={index}>
                                <Chip label={chat.from} />
                                <div>
                                    <Typography variant="body1" gutterBottom>
                                        {chat.msg}
                                    </Typography>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={classes.flex}>
                    <TextField
                        label="Send a chat"
                        className={classes.chatBox}
                        value={textValue}
                        onChange={e => changeTextValue(e.target.value)}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        onClick={() => {
                            sendChatAction({
                                from: user,
                                msg: textValue,
                                topic: activeTopic,
                            });
                            changeTextValue('');
                        }}
                    >
                        Send
                    </Button>
                </div>
            </Paper>
        </div>
    );
};

export default Dashboard;
