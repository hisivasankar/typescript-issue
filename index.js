"use strict";

if (process.env.NODE_ENV === "production") {
  module.exports = require("./build/mylibrary.production.min.js");
} else {
  module.exports = require("./build/mylibrary.development.js");
}
