Redux has only one store!

1. Store can dispatch an action [store.dispatch(action)]
2. Store can subscribe to an listener [store.subscribe(listener)]
3. Store can get current state [store.getState()]
4. Store can replace reducer [replaceReducer(nextReducer)] NOTE: This feature is used for Hot reloading


NOTE: Store does not handle actions to change the state it just dispatched actions!
