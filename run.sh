#!/bin/bash
PATH=$PATH:$(npm bin)
set -x


ng build --prod -sm

# ngu-app-shell --module src/app/app.module.ts \
#              --out dist/index.html

ngu-sw-manifest --module src/app/app.module.ts \
              --out dist/ngsw-manifest.json

# ngu-firebase-push --module src/app/app.module.ts \
              --out firebase.json

cp node_modules/@angular/service-worker/bundles/worker-basic.min.js dist/
