const initLocation = "Seattle, WA";
// interfaz consensiuada por las Acciones de un reducer
/*
interface  Action {
  type: string;
  payload: any
}
*/
export default function location(state = initLocation, action) {
  switch (action.type) {
    case "CHANGE_LOCATION":
      return action.payload;
    default:
      return state; // SIEMPRE debemos devolver el estado del store por defecto, si NO deseamos controlar un estado en concreto
  }
}

// --> la ejecucion de los reducers son SINCRONAS
// react proporciona middlewares asincronos para gestionar reducers y resolverlos on demand
