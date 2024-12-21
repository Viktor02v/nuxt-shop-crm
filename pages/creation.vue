<script setup lang="ts">
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
				<div class="flex justify-center mb-5">
					<h2 class="text-[1.3rem] p-2 bg-gradient-to-b from-[#020817] to-[#0F172A] border rounded">
						Create item
					</h2>
				</div>
				<div class="flex flex-col gap-10 items-center justify-center ">
					<div class="w-1/2 border-b pb-10">
						<LayoutCreationForm v-model:form-values="formValues" />
					</div>

					<div class="w-1/2">
						<div class="flex justify-center mb-5">
							<h2 class="text-[1.3rem] p-2 bg-gradient-to-b from-[#020817] to-[#0F172A] border rounded">
								Overview
							</h2>
						</div>

						<div class="w-full ">
							<div class="flex justify-center">
								<div class="flex flex-col">
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
</style>
