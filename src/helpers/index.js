import store from '../store/store';

export const name = () => {
	const reduxStore = store.getState();
	return reduxStore.name;	
}