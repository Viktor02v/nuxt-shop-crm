<script setup lang="ts">
defineProps({
	formValues: Object,
	required: true,
})
</script>

<template>
	<div
		v-show="formValues.name || formValues.description || formValues.foto_url || formValues.price || formValues.vendor"
		class="w-1/2 border p-5 animation  bg-gradient-to-b from-[#020817] to-[#0F172A]">
		<div class="flex justify-center mb-5">
			<h2 class="text-[1.3rem] p-2 bg-gradient-to-b from-[#020817] to-[#0F172A] border rounded">
				Overview
			</h2>
		</div>

		<div class="w-full ">
			<div class="flex justify-center">
				<div class="flex flex-col">
					<div
						class="border animation hover:scale-105 transition-all duration-500 rounded py-5 px-2 flex flex-col items-center">
						<div class="flex flex-col">
							<div class=" min-h-[220px] flex flex-col  justify-center">
								<img :src="formValues.foto_url" width="200" class="mb-4 bg-[#060D1D] rounded" />
							</div>

							<div class="flex h-[190px] overflow-y-auto gap-1 mb-2 flex-col">
								<p class="text-[1.3rem] ">{{ formValues.name }}</p>
								<div class="w-[100px] overflow-auto text-nowrap">
									<p class="underline font-light">{{ formValues.description }}</p>
								</div>
								<p class="">{{ formValues.vendor }}</p>
								<p class="font-light">{{ formValues.price }}UAN</p>
								<span class="underline">Show more...</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>



<style scoped></style>