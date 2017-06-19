import { createStore } from 'redux';
import reducer from './reducers';
import promise from './promise';

export default function configureStore(onCompletion:()=>void):any{
  //const enhancer = compose(
    //null, //applyMiddleware 입력
    //null, //devTools 입력
  //);

  const store = createStore(reducer, {});
  //persistStore

  return store;
}
