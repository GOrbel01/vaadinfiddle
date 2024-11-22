import {createSlice, createAction, createReducer, PayloadAction} from '@reduxjs/toolkit'

// const increment = createAction('counter/increment')
// const decrement = createAction('counter/decrement')
// const incrementByAmount = createAction<number>('counter/incrementByAmount')
// const zero = createAction('counter/zero')

// const counterReducer = createReducer(initialState, (builder) => {
//     builder
//         .addCase(increment, (state, action) => {
//             state.count++
//         })
//         .addCase(decrement, (state, action) => {
//             state.count--
//         })
//         .addCase(zero, (state, action) => {
//             state.count = 0
//         })
// })

interface CounterState {
    count: number
    hello: string
}

const initialState: CounterState = {
    count: 0,
    hello: ''
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {

        increment: (state) => {
            state.count += 1
        },
        decrement: (state) => {
            state.count -= 1
        },
        zero: (state) => {
            state.count = 0
        },
        setToCount: (state,action: PayloadAction<number>) => {
            state.count = action.payload
        },
        setHello: (state, action:PayloadAction<string>) => {
            state.hello = action.payload
        }
    }

})

export const { increment, decrement, zero, setToCount, setHello } = counterSlice.actions

export default counterSlice.reducer