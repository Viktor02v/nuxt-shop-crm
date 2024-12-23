<script setup lang="ts">
useSeoMeta({
	title:'Creation | CRM',
})

const formValues = ref({
	name: "",
	vendor: "",
	price: "",
	description: "",
	foto_url: "",
});
</script>

<template>
	<div class="p-5 w-full">
		<LayoutHeaderSecondary>
			<template #content-secondary>
				Creation
			</template>
		</LayoutHeaderSecondary>

		<div class="mt-10">
			<div class="border p-5 bg-gradient-to-r from-[#020817] to-[#0F172A]">

				<div class="flex gap-10 items-start justify-center ">

					<div class="w-1/2 border p-5 bg-gradient-to-b from-[#020817] to-[#0F172A]">
						<div class="flex justify-center mb-5">
							<h2 class="text-[1.3rem] p-2 bg-gradient-to-b from-[#020817] to-[#0F172A] border rounded">
								Create item
							</h2>
						</div>
						<LayoutCreationForm v-model:form-values="formValues" />
					</div>

					<LazyLayoutCreationOverview :form-values="formValues" />
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
@keyframes show {
	from {
		transform: scale(0.5) translateY(-30px);
		opacity: 0.4;
	}

	to {
		transform: scale(1) translateY(0);
		opacity: 1;
	}
}

.animation {
	animation: show 0.6s ease-in-out;
}
</style>
