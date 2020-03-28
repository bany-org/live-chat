import React from 'react';
import io from 'socket.io-client';

export const CTX = React.createContext();

const initialState = {
    general: [
        {
            from: 'Kuba',
            msg: 'OMG WTF',
        },
        {
            from: 'Marta',
            msg: 'Cześć Kuba',
        },
        {
            from: 'Marta',
            msg: 'Cześć Kuba',
        },
    ],
    random: [
        {
            from: 'Marta',
            msg: 'halo halo',
        },
        {
            from: 'Marta',
            msg: 'haJest tu ktoś?',
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
    console.log('store');

    if (!socket) {
        socket = io(':3001');

        socket.on('chat message', function(msg) {
            console.log('on chat message', msg);

            dispatch({ type: 'RECIVE_MESSAGE', payload: msg });
        });
    }

    const [state, dispatch] = React.useReducer(reducer, initialState);

    const user = 'User' + Math.random(100).toFixed(2);

    return (
        <CTX.Provider value={{ state, sendChatAction, user }}>
            {props.children}
        </CTX.Provider>
    );
}

export default Store;
