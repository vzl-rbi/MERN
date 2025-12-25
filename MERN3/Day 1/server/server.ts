import app from "./src/app.js";
import { envConfig } from "./src/config/config.js";


function startServer() {
  const PORT = envConfig.PORT || 4000
  app.listen(PORT, () => {console.log(`Server started at PORT http://localhost:${PORT}`)})

}
startServer()