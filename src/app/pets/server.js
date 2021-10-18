import express from "express";
import { renderToString, renderToNodeStream } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import fs from "fs";
import PetsApp from "./features/PetsApp";

// node server
// son dos los objetivos:
// - HTTP SERVER: queremos crear un servidor http en node que nos permita publicar el build de distribucion de nuestra app (npm run build)
// - SERVER SIDE RENDERING: queremos desde este este servidor ejecutar ala aplicacion, interpretar jsx y servir el codigo del routing pre-recargado
// esta ultima funcionalidad se requiere para que el navegador no tenga que interpretar el DOM, sin ejecutar, por lo que es util para cargar servicios al principio o para la lectura de los browser engines para la indexacion del contenidp
// First, we need to remove all references to window or anything browser related from a path that could be called in Node (ALL DECLARED AT THE TOP LEVEL OF THE MODULES)

const PORT = process.env.PORT || 3000;
const htmlHookToInjectApplication = "APP ROOT";
const html = fs.readFileSync("dist/index_pets.html").toString();
const parts = html.split(htmlHookToInjectApplication);
const app = express();

const reactAppMiddlewareStatics = (req, res) => {
  const httpContext = {};
  // tenemos que emular la misma configuracion del hydrate() en client.js, que se va a injectar de la misma manera en el browser (pero sin ejecutarla)
  //   <Router>
  //     <PetsApp/>
  //   </Router>
  const reactAppScripting = (
    <StaticRouter url={req.url} context={httpContext}>
      <PetsApp />
    </StaticRouter>
  );
  const staticAppRender = renderToString(reactAppScripting);

  // return 200 status by default is important to the browsers crawler
  res.status(httpContext.statusCode || 200);
  res.send(parts[0] + staticAppRender + parts[1]);
  res.end();
};

const reactAppMiddlewareStreaming = (req, res) => {
  // inmediatamente el servidor devuelve el primer fragmento del html que vamos a servir en /dist
  // que contiene la cabeceta HTTML, que le permitira al browser empezar a descargar inmediatamente los scripts de css antes de que empiece a devolver el codigo de React
  res.write(parts[0]);
  const httpContext = {};
  const reactAppScripting = (
    <StaticRouter url={req.url} context={httpContext}>
      <PetsApp />
    </StaticRouter>
  );

  const streamAppRender = renderToNodeStream(reactAppScripting);

  // concatenamos la app a la respuesta (en formato de stream)
  streamAppRender.pipe(res, { end: false });
  streamAppRender.on("end", () => {
    res.status(httpContext.statusCode || 200);
    // concatenamos la la segunda parte que nos falta del client.html a la respuesta (resolviendo el stream)
    res.write(parts[1]);
    res.end();
  });
};

app.use("/dist", express.static("dist"));
app.use(reactAppMiddlewareStreaming);
console.log(`listening on http://localhost:${PORT}`);
app.listen(PORT);
