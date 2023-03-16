const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      favorites: [],
    },
    actions: {
		addFavorites: (name) => {
			const store = getStore();
			setStore({favorites:[...store.favorites, name]})
			
		}
	},
  };
};

export default getState;
