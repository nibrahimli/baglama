import store from '../store/store';

export const loca = () => {
	console.log("helpers : " +store.getState().settings.locale);
	const settingsStore = store.getState().settings;
	switch(settingsStore.locale){
		case 'az' : return 'fr';
		case 'fr' : return 'en';
		case 'en' : return 'az';
		default : return 'fr';
	}
}