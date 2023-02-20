<template>
	<div class="menu row mt-5">
		<!-- <div class="row text-center">
			<h4>
				<b>{{ deptInfo.deptNm }}</b
				>님 안녕하세요.
			</h4>
		</div> -->
		<div class="accordion" id="myAccordion">
			<div class="accordion-item">
				<h2 class="accordion-header" id="heading1">
					<button
						class="accordion-button p-3 collapsed"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#collapse1"
						aria-expanded="false"
						aria-controls="collapse1"
					>
						About
					</button>
				</h2>
				<div
					id="collapse1"
					class="accordion-collapse collapse"
					aria-labelledby="heading1"
					data-bs-parent="#myAccordion"
				>
					<div class="accordion-body">
						<About />
					</div>
				</div>
			</div>
			<div class="accordion-item">
				<h2 class="accordion-header" id="heading3">
					<button
						class="accordion-button p-3 collapsed"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#collapse3"
						aria-expanded="false"
						aria-controls="collapse3"
					>
						오픈소스 라이선스
					</button>
				</h2>
				<div
					id="collapse3"
					class="accordion-collapse collapse"
					aria-labelledby="heading3"
					data-bs-parent="#myAccordion"
				>
					<OpenSource />
				</div>
			</div>
			<div class="accordion-item">
				<div class="accordion-header" id="heading4">
					<button
						@click="logout"
						class="my-accordion-button p-3 collapsed"
						type="button"
					>
						홈으로
						<fa-icon icon="sign-out-alt" />
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import OpenSource from '@/components/managerment/OpenSource.vue';
import About from '@/components/managerment/About.vue';
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
	name: 'setting',
	components: {
		OpenSource,
		About,
	},
	setup() {
		const router = useRouter();
		const deptInfo = JSON.parse(sessionStorage.getItem('deptInfo') as string);

		const logout = () => {
			sessionStorage.removeItem('deptInfo');
			router.push('/');
		};
		return { logout, deptInfo };
	},
});
</script>

<style scoped>
#profile {
	width: 200px;
	height: 200px;
}

.my-accordion-button {
	position: relative;
	display: flex;
	align-items: center;
	width: 100%;
	text-align: left;
	background-color: #fff;
	border: 0;
	border-radius: 0;
	overflow-anchor: none;
}

.my-accordion-button svg {
	flex-shrink: 0;
	margin-left: auto;
	background-repeat: no-repeat;
}

.my-accordion-button:active {
	color: white !important;
	background-color: black !important;
}

.accordion-button:not(.collapsed) {
	color: white !important;
	background-color: black !important;
}

.accordion-button:not(.collapsed)::after {
	background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
}
</style>
