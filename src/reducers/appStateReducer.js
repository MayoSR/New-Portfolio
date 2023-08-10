const initialState = [
  {
    id: 0,
    isDir: 0,
    icon: "https://img.icons8.com/color/48/000000/visual-studio-code-2019.png",
    name: "Visual Studio Code",
    status: 0,
  },
];

function setAppStatusByID(state, action, status) {
  let id = action.reference;
  let coords = action.coords;
  let selectedApp = state.filter((app) => app.id === id)[0];
  let appStatus = {
    ...selectedApp,
    status: status,
    coords: coords,
  };

  console.log(appStatus, "appStatus");
  let parsedAppList = state.filter((app) => app.id !== id);
  return [...parsedAppList, appStatus];
}

const appState = (state = initialState, action) => {
  switch (action.type) {
    case "START_APP":
      return setAppStatusByID(state, action, 1);
    case "STOP_APP":
      return setAppStatusByID(state, action, 0);
    default:
      return state;
  }
};

export default appState;
