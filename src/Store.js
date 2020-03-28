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
    random: [
        {
            from: 'BOT',
            msg: 'Hello there',
        },
    ],
};

function reducer(state, action) {
    const { from, msg, topic } = action.payload;

    console.log('state', state);

    switch (action.type) {
        case 'RECIVE_MESSAGE':
            console.log('correct action', from, msg, topic);

            const newState = {
                ...state,
                [topic]: [
                    ...state[topic],
                    {
                        from,
                        msg,
                    },
                ],
            };

            console.log('new state', newState);

            return newState;
        default:
            console.log('default');

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
        const port = process.env.PORT || ':3001';
        console.log('port', port);

        socket = io(port);
        socket.on('chat message', onChatMessage);
    }, []);

    // if (!socket) {
    //     socket = io(':3001');

    //     socket.on('chat message', function(msg) {
    //         console.log('on chat message', msg);

    //         dispatch({ type: 'RECIVE_MESSAGE', payload: msg });
    //     });
    // }

    // const user = 'User' + Math.random(100).toFixed(2);

    return (
        <CTX.Provider value={{ state, sendChatAction, user }}>
            {props.children}
        </CTX.Provider>
    );
}

export default Store;
