<script setup lang="ts">
import { useMenuStore } from '@/store/menu.store';
const menuStore = useMenuStore()

const toggleMenu = () => {
	menuStore.toggleMenu()
}
</script>

<template>
	<aside :class="{
		'translate-x-[-60px]': menuStore.isMenuOpen,
		'translate-x-[0px]': !menuStore.isMenuOpen
	}"
		class="fixed z-10 left-0 w-[40px] md:w-[60px] h-[100vh] transition-all duration-500 border border-top-white bg-gradient-to-l from-[#020817] to-[#0F172A]">
		<div class="relative">
			<div :class="{
				'translate-x-[-15px]': menuStore.isMenuOpen,
				'translate-x-[-50px]': !menuStore.isMenuOpen
			}" class="absolute flex  justify-center items-cetner top-5 w-[45px] hover:scale-110 h-[45px] left-[58px] transition-all duration-500">
				<div class="">
					<Icon v-if="menuStore.isMenuOpen" name="lucide:sidebar-open" @click="toggleMenu" class="cursor-pointer"
						size="40" />
					<Icon v-else name="lucide:sidebar-close" @click="toggleMenu" class="cursor-pointer" size="40" />
				</div>
			</div>

		</div>
		<LayoutSidebarMenu class="mt-20 border-t" />
	</aside>
</template>

<style scoped>

</style>