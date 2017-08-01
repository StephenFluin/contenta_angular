// ./index.js
require('zone.js/dist/zone-node');
require('reflect-metadata');
const fs = require('fs');
const moduleFactory  = require('./dist-server/main.bundle.js').AppServerModuleNgFactory;
const { renderModuleFactory } = require('@angular/platform-server');

console.log()

renderModuleFactory(moduleFactory, {
    url: '/',
    document: fs.readFileSync('dist-client/index.html',  'utf8')
}).then(html => {
    fs.writeFileSync('dist-client/index-server.html', html);
    console.log(html);
});
