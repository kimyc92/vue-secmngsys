/**
 * IMPORTANT - do not use imports in this file!
 * It will break global definition.
 */
type DateType = string | number; // Date
type JSONValue = string | number | boolean | JSONObject | JSONArray;
type JSONArray = Array<JSONValue>;

interface JSONObject {
	[x: string]: JSONValue;
}

interface DOMEvent<T extends EventTarget> extends Event {
	target: T;
}

interface Emit {
	emit: SetupContext['emit'];
}

declare namespace NodeJS {
	export interface Global {
		Emit: Emit;
		DOMEvent: DOMEvent;
		JSONValue: JSONValue;
		JSONObject: JSONObject;
		JSONArray: JSONArray;
		SOValue: SOValue;
		SOArray: SOArray;
		SOObject: SOObject;
		DateType: DateType;
	}
}

/*
declare namespace Module1 {
  export let a: number;
}
*/
//export = Module1;
