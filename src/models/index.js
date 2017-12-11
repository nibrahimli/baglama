import store from '../store/store';

export const changeLocale = () => {
	const settingsStore = store.getState().settings;
	switch(settingsStore.locale){
		case 'az' : return 'fr';
		case 'fr' : return 'en';
		case 'en' : return 'az';
		default : return 'fr';
	}
}