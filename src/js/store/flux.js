const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      favorites: [],
    },
    actions: {
		addFavorites: (name) => {
			const store = getStore();
			setStore({favorites:[...store.favorites, name]})
		},

    removeFavorites: (name) => {
      const store = getStore();
      let newFavorites = store.favorites.filter((elem)=> name != elem )
      setStore({favorites: newFavorites})
    }
	},
  };
};

export default getState;
