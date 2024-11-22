import { ViewConfig } from '@vaadin/hilla-file-router/types.js';
import { useSignal } from '@vaadin/hilla-react-signals';
import { Button, Notification, TextField } from '@vaadin/react-components';
import { HelloWorldService } from 'Frontend/generated/endpoints.js';

import { Provider } from 'react-redux'
import store from '../components/redux/countstore'
import { useAppDispatch, useAppSelector } from "../components/redux/hooks"
import {increment, decrement, zero, setToCount, setHello} from '../components/redux/counter'
import {PayloadAction} from "@reduxjs/toolkit";

export const config: ViewConfig = {
  menu: { order: 0, icon: 'line-awesome/svg/globe-solid.svg' },
  title: 'Hello World',
};

let pl:PayloadAction<number> = {
    payload: 5,
    type: 'number'
}

const HelloWorldView = () => {
  const name = useAppSelector(state => state.counter.hello)
  const count  = useAppSelector(state => state.counter.count)
  const dispatch = useAppDispatch()
  return (
    <>
      <section className="flex p-m gap-m items-end">
        <TextField
          label="Your name"
          onValueChanged={(e) => {
            dispatch(setHello(e.detail.value));
          }}
        />
       <textarea aria-label="test">

       </textarea>
        <Button
          onClick={async () => {
            const serverResponse = await HelloWorldService.sayHello(name);
            Notification.show(serverResponse);
          }}
        >
          Say hello
        </Button>
          <p>Count { count }</p>
          <Button onClick={ () => dispatch(increment()) }>Plus</Button>
          <Button onClick={ () => dispatch(decrement()) }>Minus</Button>
          <Button onClick={ () => dispatch(zero()) }>Zero</Button>
          <Button onClick={ () => dispatch(setToCount(5))}>Set to 5</Button>
      </section>
    </>
  );
}

const WrappedHelloWorld = () => {
    return (
        <Provider store={store}>
            <HelloWorldView></HelloWorldView>
        </Provider>
        )
}

export default WrappedHelloWorld
