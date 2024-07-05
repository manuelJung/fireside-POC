## Setup

https://dev.to/receter/how-to-create-a-react-component-library-using-vites-library-mode-4lma

## Before Release

i dont know yet how to update on file-save and to deliver the correct sourcemaps so for now we export the "lib/main.tsx". But when building we should set the correct keys in package.json:

"main": "dist/main.js",
"types": "dist/main.d.ts",