<template>
	<div class="appNavbar">
		<nav class="navbar navbar-expand-lg navbar-light bg-light">
			<div class="container-fluid">
				<a class="navbar-brand m-1" href="/"
					><h6 class="m-0">
						<strong>SUHYUP </strong>
						<span class="badge bg-primary me-2">beta</span>
					</h6></a
				>

				<!-- <h6 class="navbar-brand m-0">
					<a href="/"><strong>SUHYUP </strong></a
					><span class="badge bg-secondary">beta</span>
				</h6> -->

				<button
					class="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNavAltMarkup"
					aria-controls="navbarNavAltMarkup"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
					<div class="navbar-nav">
						<a class="nav-link ps-3" aria-current="page" href="/password"
							><fa-icon icon="fa-solid fa-unlock-keyhole" /> 비밀번호 변경</a
						>
						<a class="nav-link ps-3" href="/setting"
							><fa-icon icon="fa-solid fa-gears" /> 관리</a
						>
					</div>
				</div>
			</div>
		</nav>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'AppNavBar',
	components: {},
	setup() {
		return {};
	},
});
</script>

<style scoped>
.navbar {
	box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 5%), inset 0 -1px 0 rgb(0 0 0 / 15%);
}
.btnMenu {
	outline: none !important;
	box-shadow: none;
}
.btnMenu:active {
	background-color: cornflowerblue !important;
}
</style>
