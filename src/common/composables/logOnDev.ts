import axios, { AxiosError } from 'axios';

const logOnDev = (message: string) => {
	if (process.env.NODE_ENV === 'development') console.log(message);
};

// function logOnDevReqRes(ReqRes: Error): void {}

function logOnDevError(error: AxiosError | Error): void {
	if (axios.isAxiosError(error)) {
		logOnDev(
			'[API] [' +
				error.config?.method?.toLocaleUpperCase() +
				'] [' +
				error.config?.url +
				'] [RESPONSE ' +
				error.response?.status +
				']',
		);
	} else {
		throw new Error('different error than axios');
	}
}

export { logOnDev, logOnDevError };
