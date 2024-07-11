// build.js

const esbuild = require('esbuild');
const { stimulusPlugin } = require('esbuild-plugin-stimulus');

esbuild.build({
  entryPoints: ["./src/javascripts/app.js"],
  outfile: "./assets/page.js",
  watch: true,
  //watch: process.argv.includes('--watch'),
  plugins: [stimulusPlugin()],

  // ...
}).catch(() => process.exit(1));
