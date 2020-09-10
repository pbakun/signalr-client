import React from 'react';
import './App.css';
import Modal from './Containers/Modal';
import ModalProvider from './Contexts/ModalProvider';
import AppContainer from './Containers/AppContainer';

/**
 * @return {null}
 */
function App() {
  return (
    <ModalProvider>
      <Modal>
        <AppContainer />
      </Modal>
    </ModalProvider>
  );
}

export default App;
