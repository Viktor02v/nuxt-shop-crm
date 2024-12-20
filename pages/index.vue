<script setup lang="ts">
</script>

<template>
	<div class="w-full py-5">
		<!-- Header -->
		<LayoutHeaderSecondary>
			<template #content-secondary>
				Collections
			</template>
		</LayoutHeaderSecondary>

		<!-- ManList -->
		<div class="p-3 w-full">
			<LazyLayoutHomeManList />
		</div>
		
		<!-- WomanList -->
		<div class="p-3 w-full">
			<LazyLayoutHomeWomanList />
		</div>
	</div>
</template>

<style scoped></style>