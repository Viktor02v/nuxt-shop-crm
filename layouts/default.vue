<script setup lang="ts">
import { useMenuStore } from '@/store/menu.store';
const menuStore = useMenuStore();
</script>

<template>
	<section class="w-full relative h-full" :class="">
		<LayoutSidebar />
		<div>
			<slot />
		</div>
	</section>
</template>


<style scoped></style>