import { computed, ref } from 'vue';

export default function useState() {
	const state = ref({ post: {} });

	function setPost(post: string) {
		state.value.post = post;
	}

	async function loadPost(id: string) {
		const post = await fetchPost(id);
		setPost(post);
	}
	function fetchPost(id: string) {
		return id;
	}
	const getPost = computed(() => state.value.post);

	return { state, loadPost, getPost };
}
