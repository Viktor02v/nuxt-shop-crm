<script setup lang="ts">

</script>

<template>
	<div class="p-5 w-full">
		<!-- Header -->
		<LayoutHeaderSecondary>
			<template #content-secondary>
				Creation
			</template>
		</LayoutHeaderSecondary>


		<div class="mt-10">
			<div class="border p-5 bg-gradient-to-t from-[#020817] to-[#0F172A]">

				<div class="flex justify-center mb-5">
					<h2 class="text-[1.3rem] p-2 bg-gradient-to-b from-[#020817] to-[#0F172A] border rounded">
						Create item</h2>
				</div>

				<div class="flex justify-center">
					<div class="w-1/2">
						<form @submit="" class="flex flex-col gap-2">
							<UiInput type="file"></UiInput>
							<UiInput type="text"></UiInput>
							<UiInput type="text"></UiInput>
							<UiInput type="number"></UiInput>
							<UiInput type="number"></UiInput>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped></style>