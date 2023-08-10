export function signalTopLayer(id) {
  return { type: "TOP_LAYER_Z_INDEX", reference: id };
}

export function startAppProcess(app, isDir = 0) {
  return {
    type: "START_APP",
    reference: app.id,
    coords: app.coords,
  };
}

export function stopAppProcess(id) {
  return { type: "STOP_APP", reference: id };
}
