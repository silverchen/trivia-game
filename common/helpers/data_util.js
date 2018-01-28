import { isString, isArray } from 'lodash';
import he from 'he';

module.exports = {
  decodeString: function (s) {
    if (!this.isStringEmpty(s)) {
      return he.decode(s);

    }
    return s;
  },
  isString: function (s) {
    return isString(s);
  },
  isStringEmpty: function (s) {
    if (!this.isNotNull(s)) {
      return true;
    }
    return s.length == 0;
  },
  isNumber: function (o) {
    return ! isNaN (o-0) && o !== null && o !== "" && o !== false;
  },
  isObject: function (o) {
    return o !== null && typeof o === 'object';
  },
  isArray: function (o) {
    return isArray(o);
  },
  isArrayEmpty: function (o) {
    return !this.isNotNull(o) || !isArray(o) || o.length <= 0;
  },
  isNotNull: function (o) {
    return o != null && o !== undefined;
  },
  replaceStringAt: function (string, startIndex, length, replacementCharacter) {
    return string.substring(0, startIndex) + replacementCharacter + Array(length).join(replacementCharacter);
  },
  getNumberFromBoolean: function (o) {
    if (this.isString(o)) {
      return o.toLowerCase() == 'true' ? 1 : 0;
    }

    return o == 1 ? 1 : 0;
  },
  getValuesFromObjects: function (objects) {
    var arr = [];
    objects.map((obj) => {
      for (let key in obj) {
        arr.push(obj[key]);
      }
    });
    return arr;
  },
  getValuesFromRange: function (range) {
    var arr = [];
    for (i = range.from; i <= range.to; i+=range.interval) {
      arr.push(i);
    }
    return arr;
  },
  getKeyFromObjectsByValue: function (value, objects) {
    for (i = 0; i < objects.length; i++) {
      for (let key in objects[i]) {
        if (objects[i][key] === value) {
          return key;
        }
      }
    }
    return null;
  },
  getValueFromObjectsByKey: function (key, objects) {
    for (i = 0; i < objects.length; i++) {
      for (let objKey in objects[i]) {
        if (objKey === key) {
          return objects[i][objKey];
        }
      }
    }
    return null;
  }
};
