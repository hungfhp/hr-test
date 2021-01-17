import app from "./app.js"
import initAdmin from "./seed/initAdmin.js"

/**
 * Start Express server.
 */
app.listen(app.get("port"), () => {
  initAdmin()
  console.log("App is running at http://localhost:%d in %s mode", app.get("port"), app.get("env"))
  console.log("  Press CTRL-C to stop\n")
})
