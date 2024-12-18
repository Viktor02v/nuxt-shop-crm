<script setup lang="ts">
import { useMenuStore } from '@/store/menu.store';
const menuStore = useMenuStore();
</script>

<template>
	<section class="w-full relative h-full">
		<LayoutSidebar />
		<div :class="{
			'w-[1140px]': !menuStore.isMenuOpen,
		}" class="transition-all  py-7 px-20 w-full h-full duration-500">
			<slot />
		</div>
	</section>
</template>


<style scoped>

</style>