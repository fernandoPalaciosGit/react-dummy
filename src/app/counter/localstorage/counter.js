const counterStateKey = "counterState";

export function getStateFromLocalStorage(state = {}) {
  return JSON.parse(
    localStorage.getItem(counterStateKey) || JSON.stringify(state)
  );
}

export function setStateToLocalStorage(state = {}) {
  localStorage.setItem(counterStateKey, JSON.stringify(state));
}
