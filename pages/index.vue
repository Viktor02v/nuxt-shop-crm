<script setup lang="ts">
useSeoMeta({
	title: 'Home | CRM',
	description: 'Explore the latest collections in our CRM application.',
	ogTitle: 'Home | CRM',
	ogDescription: 'Discover collections for men and women on our CRM platform.',
});
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
			<LazyLayoutHomeManList type="man" />
		</div>

		<!-- WomanList -->
		<div class="p-3 w-full">
			<LazyLayoutHomeWomanList type="woman" />
		</div>
	</div>
</template>

<style scoped>

</style>