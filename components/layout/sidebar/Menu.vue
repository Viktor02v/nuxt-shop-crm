<script setup lang="ts">
import { MENU_DATA } from '~/components/layout/sidebar/menu.data'
import { useMenuStore } from '@/store/menu.store';
import { useIsLoadingStore, useAuthStore } from '@/store/auth.store';
import { account } from '~/lib/appwrite';

const menuStore = useMenuStore()
const authStore = useAuthStore();
const isLoadingStore = useIsLoadingStore();
const route = useRoute();
const router = useRouter();

const handleLogOut = async () => {
	isLoadingStore.set(true)
	await account.deleteSession('current')
	authStore.clear()
	await router.push('/login')
	isLoadingStore.set(false)
}
</script>

<template>
	<div>
		<NuxtLink :to="item.url" v-for="item in MENU_DATA " :key="item.name" :class="[
			'text-[20px] flex my-7 transition-all duration-400 pl-3 items-center md:text-3xl',
			route.path === item.url ? 'text-cyan-800 scale-125' : 'text-white hover:scale-125 hover:text-cyan-900'
		]">
			<Icon :name="item.icon" />
		</NuxtLink>

		<NuxtLink v-if="authStore.isAuth" @click="handleLogOut" to="/login"
			class="
				text-[20px] flex my-7 hover:scale-125 hover:text-cyan-800 transition-all duration-400 pl-3 items-center md:text-3xl">
			<Icon name="bx:log-out-circle" />
		</NuxtLink>
	</div>

</template>

<style scoped></style>