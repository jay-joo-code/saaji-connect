import React from 'react';
import App from 'src/App';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import store from 'src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';

const persistor = persistStore(store)

const AppContainer = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <App />
            </PersistGate>
        </Provider>
        )
}

export default AppContainer;