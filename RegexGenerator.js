"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var MethodChainable_1 = require("method-chainable/MethodChainable");
// Purpose of this class is to provide an easier, simple-english alternative to using
// regex pattern-matching syntax.
var RegexGenerator = /** @class */ (function (_super) {
    __extends(RegexGenerator, _super);
    function RegexGenerator(_config) {
        if (_config === void 0) { _config = {
            caseSensitive: false,
            multiline: false,
            global: true
        }; }
        var _this = _super.call(this) || this;
        _this._config = _config;
        _this._pattern = '';
        _this._flags = '';
        _this.ALPHAUPPER = 'A-Z';
        _this.ALPHALOWER = 'a-z';
        _this.ALPHAALL = 'a-zA-Z';
        _this.DIGIT = '0-9';
        _this.ALPHANUMERICLOWER = 'a-z0-9';
        _this.ALPHANUMERICUPPER = 'A-Z0-9';
        _this.ALPHANUMERICALL = 'A-Za-z0-9';
        _this._set_flags();
        return _this;
    }
    RegexGenerator.prototype.generate = function () {
        return new RegExp(this._pattern, this._flags);
    };
    RegexGenerator.prototype.beginSubpattern = function () {
        this._pattern += '(';
        return this;
    };
    RegexGenerator.prototype.endSubpattern = function () {
        this._pattern += ')';
        return this;
    };
    RegexGenerator.prototype.zeroOrOne = function () {
        this._pattern += '?';
        return this;
    };
    RegexGenerator.prototype.zeroOrMore = function () {
        this._pattern += '*';
        return this;
    };
    RegexGenerator.prototype.oneOrMore = function () {
        this._pattern += '+';
        return this;
    };
    RegexGenerator.prototype.digit = function () {
        this._pattern += "[" + this.DIGIT + "]";
        return this;
    };
    RegexGenerator.prototype.alphanumericLower = function () {
        this._pattern += ('[' + this.ALPHANUMERICLOWER + ']');
        return this;
    };
    RegexGenerator.prototype.alphanumericUpper = function () {
        this._pattern += ('[' + this.ALPHANUMERICUPPER + ']');
        return this;
    };
    RegexGenerator.prototype.alphanumericAll = function () {
        this._pattern += ('[' + this.ALPHANUMERICALL + ']');
        return this;
    };
    RegexGenerator.prototype.alphaUpper = function () {
        this._pattern += "[" + this.ALPHAUPPER + "]";
        return this;
    };
    RegexGenerator.prototype.alphaLower = function () {
        this._pattern += "[" + this.ALPHALOWER + "]";
        return this;
    };
    RegexGenerator.prototype.alphaAll = function () {
        this._pattern += "[" + this.ALPHAALL + "]";
        return this;
    };
    // For specifying the string can contain any of the passed possibilities:
    RegexGenerator.prototype.anyOfTheseChars = function (chars) {
        this._pattern += "[" + chars + "]";
        return this;
    };
    RegexGenerator.prototype.noneOfTheseChars = function (chars) {
        this._pattern += "[^" + chars + "]";
        return this;
    };
    RegexGenerator.prototype.anyOfTheseStrings = function (possibilities) {
        var _this = this;
        possibilities.forEach(function (string) {
            _this._pattern += string + '|';
        });
        //Remove the last '|'
        this._pattern = this._pattern.substr(0, this._pattern.length - 1);
        return this;
    };
    RegexGenerator.prototype.or = function (string) {
        this._pattern += "|" + string;
        return this;
    };
    RegexGenerator.prototype.anyChar = function () {
        this._pattern += '.';
        return this;
    };
    RegexGenerator.prototype.inRange = function (numberRangeOfWildcards) {
        this._pattern += "{" + numberRangeOfWildcards.toString() + "}";
        return this;
    };
    RegexGenerator.prototype.forMinimum = function (minimum) {
        this._pattern += "{" + minimum + ",}";
        return this;
    };
    RegexGenerator.prototype.exact = function (string) {
        this._pattern += string;
        return this;
    };
    RegexGenerator.prototype.beginsWith = function () {
    };
    RegexGenerator.prototype.endsWith = function () {
    };
    RegexGenerator.prototype._set_flags = function () {
        if (this._config.global === true)
            this._flags += 'g';
        if (this._config.caseSensitive === false)
            this._flags += 'i';
        if (this._config.multiline === true)
            this._flags += 'm';
        this._flags += 'u'; // Automatically unicode.
    };
    return RegexGenerator;
}(MethodChainable_1.MethodChainable));
exports.RegexGenerator = RegexGenerator;
