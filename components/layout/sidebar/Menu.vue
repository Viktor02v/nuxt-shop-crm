<script setup lang="ts">
import { MENU_DATA } from '~/components/layout/sidebar/menu.data'
import { useMenuStore } from '@/store/menu.store';
const menuStore = useMenuStore()
const route = useRoute();
</script>

<template>
	<div>
		<NuxtLink :to="item.url" v-for="item in MENU_DATA " :key="item.name" :class="[
			'text-[20px] flex my-7 transition-all duration-400 pl-3 items-center md:text-3xl',
			route.path === item.url ? 'text-cyan-800 scale-125' : 'text-white hover:scale-125 hover:text-cyan-900'
		]">
			<Icon :name="item.icon" />
		</NuxtLink>
	</div>
</template>

<style scoped>

</style>