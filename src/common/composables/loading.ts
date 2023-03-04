import { reactive } from 'vue';

const LoadingVal = reactive({
	isLoading: false,
	fullPage: true,
	canCancel: true,
	whenCancelled: false,
	useSlot: false,
	loader: 'spinner',
	color: '#007bff',
	bgColor: '#ffffff',
	height: 128,
	width: 128,
	timeout: 3000,
});

const simulate = (): void => {
	LoadingVal.isLoading = true;
	// Simulate async call
	setTimeout(() => {
		LoadingVal.isLoading = false;
	}, LoadingVal.timeout);
};

const whenCancelled = (): void => {
	console.log('User cancelled the loader.');
	LoadingVal.isLoading = false;
};

export { LoadingVal, simulate, whenCancelled };
