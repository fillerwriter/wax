wax.util = wax.util || {};


wax.util = {
    // From Bonzo
    offset: function(el) {
        var width = el.offsetWidth;
        var height = el.offsetHeight;
        var top = el.offsetTop;
        var left = el.offsetLeft;

        while (el = el.offsetParent) {
            top += el.offsetTop;
            left += el.offsetLeft;
        }

        return {
            top: top,
            left: left,
            height: height,
            width: width
        };
    },
    // From underscore, minus funcbind for now.
    bind: function(func, obj) {
      var args = Array.prototype.slice.call(arguments, 2);
      return function() {
        return func.apply(obj, args.concat(Array.prototype.slice.call(arguments)));
      };
    },
    // From underscore
    isString: function(obj) {
      return !!(obj === '' || (obj && obj.charCodeAt && obj.substr));
    },

    indexOf: function(array, item) {
      var nativeIndexOf = Array.prototype.indexOf;
      if (array === null) return -1;
      var i, l;
      if (nativeIndexOf && array.indexOf === nativeIndexOf) return array.indexOf(item);
      for (i = 0, l = array.length; i < l; i++) if (array[i] === item) return i;
      return -1;
    },

    isArray: Array.isArray || function(obj) {
      return Object.prototype.toString.call(obj) === '[object Array]';
    },

    keys: Object.keys || function(obj) {
      var hasOwnProperty = Object.prototype.hasOwnProperty;
      if (obj !== Object(obj)) throw new TypeError('Invalid object');
      var keys = [];
      for (var key in obj) if (hasOwnProperty.call(obj, key)) keys[keys.length] = key;
      return keys;
    },

    // From quirksmode
    eventoffset: function(e) {
        var posx = 0;
        var posy = 0;
        if (!e) var e = window.event;
        if (e.pageX || e.pageY) {
            return {
                x: e.pageX,
                y: e.pageY
            }
        } else if (e.clientX || e.clientY) {
            return {
                x: e.clientX + document.body.scrollLeft
                    + document.documentElement.scrollLeft,
                y: e.clientY + document.body.scrollTop
                    + document.documentElement.scrollTop
            }
        }
    }
};
