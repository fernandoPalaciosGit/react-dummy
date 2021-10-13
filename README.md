- div#root: NOT RENDERED anything: react is going to render App here
- https://unpkg.com/react@17.0.1/umd/react.development.js: allows to load npm package from the proyect loaded by npm as service resource
- Componentes de primer orden: todo en React son componentes, es objetivo es la mudularizacion de la infraestructura de la aplicacion a traves d eetos elementos
incluso la funcion App es un componente (arranque de la aplicacion).
- para construir ese componente com un elemento de tipo render en la aplciacion (construirlo en el DOM) necesitamos la libreria de ReactDom
ReactDOM.render(React.createElement(App), document.getElementById('root'));
- React.createElement: es la interfaz basica de ltoda la aplicaiocn, esta oculta por la utulizada de JSX (templating para html para ejecutar en el render).
esta funcion permite instanciar los componentes de tipo React (si los quieres reutilizar como DOM Elements)
- Capitalizacion de las funciones de primer orden de React: solo asi ReactDOM las considera como componentes
- crear componente de tipo React: React.createElement(funcionConLogicaApp)
- indexacin de componmentes de tpo react: para que el livecycle del proceso de render de react funcione, necesita indexar de manera unica cada componente que instanciamos, 
de manera que si no le proporcionamos este valor como property (en el createElement()) considera como indexacion el tag del DOm que representa, y como los tags de html son reutilizable siempre aparecera como error: "Warning: Each child in a list should have a unique "key" prop.
"

- PARCEL
Es bundler para proyectos de front-end, con el mismo objetivo que webpack.
- Integracion con 0 configuracion
puedes ejecutrar como entry point de parcel un index.html y creara un bundler en funcion de los scripts que encuentre en el html
(aplicara el preprocesador de css, postcss, minifier de scripts, babel para js, ts...)
los bundlers ase crean en /dist por defecto
tambien creara un server http para desplegar la aplicacion que acaba de bundelizar (/dist).
Parcel utiliza babel para la transpilacion de codigo en el ejecutable del bundle, uno de sus presets importantes es M,
si agregamos React en el codigo es necesario instalar ( @babel/core, @babel/preset-react) y configurar .babelr ({"runtime": "automatic"})

"browserslist": [], en el package.json, asignamos el tipo de transpilacion a los navegadores que indicamos en esta configuracion, 
para babel integrado por parcel (https://browserslist.dev/?)

- Babel, con la ultima version, reconoce el formarto de JSX e importa de manera automatica el modulo de React por defecto, asi que no es necesario la declaracion de su import

- className="myclass in jsxs" 
Se traduce durante el transpiled de JSX en el atributo class del markup de HTML, recordar que la  sintaxis en los JS en modo JSX
se traducen como objetos de inicializazion de los componentes en React dfe tipo DOMElement (templating).

- HOOKS
manejo del estado en la aplicacion, en el runtime de JS

podemos usar Hooks or Class Components

- Data binding
EL ejemplo mas util del data binding en un control de usuario para un formulario, por ejemplo un input de tipo texto.
En react hay que asignarle un modelo de datos a cada control, no es como ANgular que implementa de manera nativa el double-data-binding y permite de manera directa asignar un hook a aun elemento.
En cuyo casoReact avisa por consola: Warning: You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.

- useState: La lireria core de React provee varios Hooks relacionados con el mantenimiento del estado de la aplcacion: useState, useDebug....
useState se utuliza para asignar un objeto como estado de una parte de la aplicacion

const [parametro_escritura, callback_escritura] = useState(valor_inicializacion);

1- asignamos el parametro de escritura del hook al valor del control de usuario
2 - utilizamos uno de los callbacks de binding de informacion en el control de usuario (onChange, onInput, onMouseOver....) y al leer el nuevo valos utilizamos el callback de escritura del hook para reasignar el valor

- Condiciones de carrera en la asignacion de Hooks
Devemos evitar declarar Hooks dentro de condicionales: el orden de declaracion de nuestros Hoks es muy importante, si condicionamos un hoook podemos provocar que el accesa a estado de la aplicacion no esa el correcto
Para ello pondremos una constraint en eslint que forzara al programador a declarar el hook


- useState como inplementacion singular de un componente
normalmente los componentes en react estan desglosados para encapsularse a modo de matrioska, de tal manera que un Componente pueda integrar un Hook de tipo useState que permita distribuir sus estado en diferentes Dummy componentes
Esto permitiria descartar el tipo de Reedux que solemos ver centralizado en un unico funnel de la aplciacion, independiente de los componentes.

- useEffect: es un hook que nos permite sincronizar datos fuera del contexto de un componente
es el hook que permite acceder a datos de manera transversal a los componentes.


- NODE_ENV=development
las aplicaciones montadas en React permiten debuguear errores de manera verbosa si esta variable de entorno esta configurada en modo desarrollador
under the hood el motor de transpilacion de la aplicacion (Parcel) si no encuentra esta variable de entorno lo preconfigura por defecto
just only type in your console: NODE_ENV=developmet && echo $NODE_ENV   

Si ademas seteamos NODE_ENV=production permitiremos al bundler de parcel minimizar el package para desplegar en los servidores de produccion

Acivacion del modo strict mode
es un parser de codigo que obliga al desarrollador a utilizar las interfaces y objetos que estan habilitados como  API segura
strict mode = safe API
es un linter, al igual que eslint, que evita el uso de codigo que el equipo de React no marca como permanente en la aplicacion
No actua en el bundler final, no mejora el performance de la aplicacion 

- REACT ROUTING
como todo en React, la libreria expone el routing como si fuera un componente : <RouteeDom/> y <Route>
la manera en la que machea el route a traves de la property {path} es muy abierta, hace match sin restricciones de izquierda a derecha del pattern aplicado
/details/:id machea con
localhost:4000
localhost:4000/details
localhost:4000/details/456

Para permitir que solo machee con una ruta (la primera que encuentre en la lista por orden de aplilacion) se utiliza  <Switch> sobre las <Route> 

- LINK tags from react-dom
cuando utilizamos un <a> para cambiar la URL y cargar otra pagina de la aplciacion, indicamos al navegador que queremos cargar otro recurso en el cliente
por lo que refrescara toda la pagina para ir a esa nueva ruta
- si modiicamos <a href> --> <Link to> indicamos a React que queremos movernos por las paginas o secciones de un SPA, por lo que unicamente se ejecutara el codigo de la <Route> que machee
- Important : tenemos que utilizar el mismo <Router> en toda la SPA

- CLASS COMPONENTS
hasta ahora hemos llamado Componentes a toda clase que exportamos transpilada con JSX y que renderizamos con ReactDom
@Component es una clase de React que permite construir clases customizadas a las que se le agregara un liveCycle del Render de React

- interfaces en el liveCycle de React.Component
render(): output de JSX, se ejecuta cada vez que se modifica alguna variable o componentes dentro del jsx que renderiza 
componentDidMount(): se ejecuta en la primera instancia del componente
this.state = {}: es un hook asignado por defecto a cualquier componente de React === const [state, setState] = useState({})
this.props.match.params.id: React recupera los parametros del ROuting que visualiza cualquier componente y los añade a this.props.match.params
para ello necesitamos inicializar ese componente con la interfaz de ReacrRouter: export default withRouter(MyCustomComponent)

- static defaultProps
setea las properties de inicializacion del componmente hijo si el padre NO las define (si el valor es undefined)

- Error Boundaries
SOlo funciona con React component class , NO con function components
- lifecycle: componentDidCatch()
se utiliza para controlar los errores de ejecucion y redireccionar al usuario a un estado consecuente    
