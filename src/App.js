import React from 'react';
import './App.css';
import Modal from './Containers/Modal';
import ModalProvider from './Contexts/ModalProvider';
import AppContainer from './Containers/AppContainer';
import { Fabric, Customizations } from "@fluentui/react";
import Theme from "./Theme/fluentTheme";
import { initializeIcons } from "@uifabric/icons";
import { Provider } from 'react-redux';
import store from "./Store/store";

function App() {
	Customizations.applySettings({ theme: Theme });
	initializeIcons();
	return (
		<ModalProvider>
			<Modal>
				<Provider store={store}>
					<Fabric applyThemeToBody>
						<AppContainer />
					</Fabric>
				</Provider>
			</Modal>
		</ModalProvider>
	);
}

export default App;
