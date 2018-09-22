import { MethodChainable } from 'method-chainable/MethodChainable';
import { IRegexConfiguration } from './IRegexConfiguration';


// Purpose of this class is to provide an easier, simple-english alternative to using
// regex pattern-matching syntax.

export class RegexGenerator extends MethodChainable {

	private _pattern = '';
	private _flags = '';
	public ALPHAUPPER = 'A-Z';
	public ALPHALOWER = 'a-z';
	public ALPHAALL = 'a-zA-Z';
	public DIGIT = '0-9';
	public ALPHANUMERICLOWER = 'a-z0-9';
	public ALPHANUMERICUPPER = 'A-Z0-9';
	public ALPHANUMERICALL = 'A-Za-z0-9';


	constructor(
		private _config: IRegexConfiguration = {
			caseSensitive: false,
			multiline: false,
			global: true
		}
	) {
		super();
		this._set_flags();
	}


	generate() {
		return new RegExp(this._pattern, this._flags);
	}


	beginSubpattern() {
		this._pattern += '(';
		return this;
	}


	endSubpattern() {
		this._pattern += ')';
		return this;
	}


	zeroOrOne() {
		this._pattern += '?';
		return this;
	}


	zeroOrMore() {
		this._pattern += '*';
		return this;
	}


	oneOrMore() {
		this._pattern += '+';
		return this;
	}


	digit() {
		this._pattern += `[${this.DIGIT}]`;
		return this;
	}


	alphanumericLower() {
		this._pattern += ('[' + this.ALPHANUMERICLOWER + ']');
		return this;
	}


	alphanumericUpper() {
		this._pattern += ('[' + this.ALPHANUMERICUPPER + ']');
		return this;
	}


	alphanumericAll() {
		this._pattern += ('[' + this.ALPHANUMERICALL + ']');
		return this;
	}


	alphaUpper() {
		this._pattern += `[${this.ALPHAUPPER}]`;
		return this;
	}


	alphaLower() {
		this._pattern += `[${this.ALPHALOWER}]`;
		return this;
	}


	alphaAll() {
		this._pattern += `[${this.ALPHAALL}]`;
		return this;
	}


	// For specifying the string can contain any of the passed possibilities:
	anyOfTheseChars(chars: string) {
		this._pattern += `[${chars}]`;
		return this;
	}


	noneOfTheseChars(chars: string) {
		this._pattern += `[^${chars}]`;
		return this;
	}


	anyOfTheseStrings(possibilities: string[]) {
		possibilities.forEach((string) => {
			this._pattern += string + '|';
		});
		//Remove the last '|'
		this._pattern = this._pattern.substr(0, this._pattern.length - 1);
		return this;
	}


	or(string) {
		this._pattern += `|${string}`;
		return this;
	}


	anyChar() {
		this._pattern += '.';
		return this;
	}


	inRange(numberRangeOfWildcards: [number, number]) {
		this._pattern += `{${numberRangeOfWildcards.toString()}}`;
		return this;
	}


	forMinimum(minimum: number) {
		this._pattern += `{${minimum},}`;
		return this;
	}


	exact(string) {
		this._pattern += string;
		return this;
	}


	beginsWith() {
	}


	endsWith() {
	}


	private _set_flags() {
		if (this._config.global === true) this._flags += 'g';
		if (this._config.caseSensitive === false) this._flags += 'i';
		if (this._config.multiline === true) this._flags += 'm';

		this._flags += 'u'; // Automatically unicode.
	}


}
