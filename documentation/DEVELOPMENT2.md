# DEVELOPMENT

**Error:**

``` bash
$ node stock.js
url:https://api.polygon.io/v2/aggs/ticker/
stock ticker:AAPL
start of date range:2023-01-01
end of date range:2023-01-09
file:///D:/work-on-external/4-JS-Py/1-Polygon/container/stocks-Polygon/stock.js:79
const { restClient } = require("@polygon.io/client-js")
                       ^

ReferenceError: require is not defined in ES module scope, you can use import instead
This file is being treated as an ES module because it has a '.js' file extension and 'D:\work-on-external\4-JS-Py\1-Polygon\container\stocks-Polygon\package.json' contains "type": "module". To treat it as a CommonJS script, rename it to use the '.cjs' file extension.
    at file:///D:/work-on-external/4-JS-Py/1-Polygon/container/stocks-Polygon/stock.js:79:24
    at ModuleJob.run (node:internal/modules/esm/module_job:193:25)
    at async Promise.all (index 0)
    at async ESMLoader.import (node:internal/modules/esm/loader:530:24)
    at async loadESM (node:internal/process/esm_loader:91:5)
    at async handleMainPromise (node:internal/modules/run_main:65:12)

Node.js v18.12.1
```

______________________________________________;

``` bash
npm install --save @polygon.io/client-js
```
