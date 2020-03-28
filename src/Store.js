import React, { useMemo, useCallback, useEffect } from 'react';
import io from 'socket.io-client';

export const CTX = React.createContext();

const initialState = {
    general: [
        {
            from: 'BOT',
            msg: 'Hello there',
        },
    ],
    // random: [
    //     {
    //         from: 'BOT',
    //         msg: 'Hello there',
    //     },
    // ],
};

function reducer(state, action) {
    const { from, msg, topic } = action.payload;

    switch (action.type) {
        case 'RECIVE_MESSAGE':
            return {
                ...state,
                [topic]: [
                    ...state[topic],
                    {
                        from,
                        msg,
                    },
                ],
            };
        default:
            return state;
    }
}

let socket;

function sendChatAction(value) {
    socket.emit('chat message', value);
}

function Store(props) {
    const [state, dispatch] = React.useReducer(reducer, initialState);
    const user = useMemo(() => 'User' + Math.random(100).toFixed(2), []);

    const onChatMessage = useCallback(
        msg => dispatch({ type: 'RECIVE_MESSAGE', payload: msg }),
        [dispatch]
    );

    useEffect(() => {
        socket = io();
        socket.on('chat message', onChatMessage);
    }, []);

    return (
        <CTX.Provider value={{ state, sendChatAction, user }}>
            {props.children}
        </CTX.Provider>
    );
}

export default Store;
