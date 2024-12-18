<script setup lang="ts">
import { computed } from 'vue';
import { useMenuStore } from '@/store/menu.store';

const menuStore = useMenuStore();

const containerClass = computed(() => [
	'transition-all py-7 h-full px-5 duration-500',
	menuStore.isMenuOpen ? 'w-[1440px]' : 'w-[1360px]',
]);

const containerStyle = computed(() =>
	menuStore.isMenuOpen ? null : { marginLeft: '65px' }
);
</script>

<template>
	<section class="w-[1440px] relative h-full">
		<LayoutSidebar />
		<LayoutHeader>
			<template #content>
				NUXT-SHOP-CRM
			</template>
		</LayoutHeader>
		<div :class="containerClass" :style="containerStyle">
			<slot />
		</div>
	</section>
</template>

<style scoped></style>
