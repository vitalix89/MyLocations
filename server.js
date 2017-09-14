// const express = require("express");
// const path = require("path");
// const webpack = require("webpack");
// const webpackConfig = require("./webpack.config.js");
// const compiler = webpack(webpackConfig);
// const webpackDevMiddleware = require("webpack-dev-middleware")(compiler, {
//   noInfo: false,
//   publicPath: webpackConfig.output.publicPath
// });
// const port = process.env.PORT || 8080;
// // const http = require('http');
// const app = express();
// app.use(webpackDevMiddleware);
// app.use(require("webpack-hot-middleware")(compiler));
// app.use(express.static(path.join(__dirname, "/build")));
// // if you want whole app to be available, you need webpack as well. this file should only serve api.
// // where is webpack configuration?
// app.get("*", (request, response) => {
//   response.sendFile(path.resolve(__dirname, "build", "index.html"));
// });
// // const server = http.createServer(app);
// // I'm installing "nodemon", this shit restarts node when file changed automaticly ohhh nice
// // At least don't have to wait hours to recompile:0
// app.get("/test", (request, response) => {});
// app.listen(port);
