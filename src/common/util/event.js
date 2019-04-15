// eventProxy.js
'use strict';
const eventProxy = {
  handler: {},
  addListener: function (eventName, fn) {
    if (this.handler[eventName] === undefined) {
      this.handler[eventName] = [];
    }

    this.handler[eventName].push(fn);
  },
  removeListener: function (eventName) {
    this.handler[eventName] = [];
  },
  trigger: function () {
    let eventName, args;
    if (arguments.length == 0) {
      return false;
    }
    eventName = arguments[0];
    args = [].concat(Array.prototype.slice.call(arguments, 1));

    if (this.handler[eventName] !== undefined
      && this.handler[eventName].length > 0) {
      for (let i in this.handler[eventName]) {
        this.handler[eventName][i].apply(null, args);
      }
    }
  }
};

export default eventProxy;