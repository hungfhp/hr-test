import listEndpoints from "express-list-endpoints"

export default (app) => {
  app.get("/", (req, res) => {
    res.send("Server is online!")
  })

  app.get("/api", (req, res) => {
    res.send(listEndpoints(app))
  })
}
