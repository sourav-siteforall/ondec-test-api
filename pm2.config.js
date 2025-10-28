module.exports = {
  apps: [{
    name: "app1",
    script: "index.js",
    output: './pm2/out.log',
    error: './pm2/error.log',
  }]
}