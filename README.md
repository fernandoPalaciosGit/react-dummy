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


