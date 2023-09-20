const path = require("path")
module.exports = {
  webpack: {
    configure: {
      resolve: {
        extensions: ['.json', '.js', '.ts', '.jsx'],
        alias: {
          "@": path.resolve(__dirname, "./src")
        }
      }
    }
  },
}
