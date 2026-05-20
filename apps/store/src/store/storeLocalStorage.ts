const localStorageName = "cartStore";

export const loadState = () => {
  const tempState = {
    cart: {
      items: [],
      isVisible: false,
    },
  };
  try {
    const serializedState = localStorage.getItem(localStorageName);
    if (!serializedState) return tempState;
    tempState.cart.items = JSON.parse(serializedState).cart.items;
    return tempState;
  } catch {
    return tempState;
  }
};
//eslint-disable-next-line
export const saveState = (state: any) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(localStorageName, serializedState);
  } catch {
    console.error("Failed to save state");
  }
};
