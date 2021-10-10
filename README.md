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
