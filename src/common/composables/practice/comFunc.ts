import { MyNumber } from '@/common/types/common';
import { computed, reactive } from 'vue';

/*
    Localstorage is Managed by KEY and JSON
*/
export const Storage = {
	init(): void {
		localStorage.clear();
	},
	save(STORAGE_KEY: string, parsed: MyNumber): void {
		//const localParsed = JSON.stringify(parsed);
		localStorage.setItem(STORAGE_KEY, JSON.stringify(parsed));
	},
	/*
      fetch(): MyNumber {
        const todoItems = localStorage.getItem(STORAGE_KEY) || '[]'; // 앞에 값이 null 경우 뒤에 [] 값으로 초기화한다.
        //debugger;
        const result = JSON.parse(todoItems);
        return result;
      },
    */
};

const state = reactive({
	isCartSidebarOpen: false,
	isLoginModalOpen: false,
});

const isCartSidebarOpen = computed(() => state.isCartSidebarOpen);
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const toggleCartSidebar = () => {
	state.isCartSidebarOpen = !state.isCartSidebarOpen;
};

const isLoginModalOpen = computed(() => state.isLoginModalOpen);
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const toggleLoginModal = () => {
	state.isLoginModalOpen = !state.isLoginModalOpen;
};

const uiState = {
	isCartSidebarOpen,
	isLoginModalOpen,
	toggleCartSidebar,
	toggleLoginModal,
};

export default uiState;
