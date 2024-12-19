<script setup lang="ts">
import { useIsLoadingStore, useAuthStore } from '@/store/auth.store';
import { account } from '~/lib/appwrite';
import { computed } from 'vue';
import { useMenuStore } from '@/store/menu.store';

const menuStore = useMenuStore();
const authStore = useAuthStore();
const isLoadingStore = useIsLoadingStore();

const containerClass = computed(() => [
	'transition-all py-7 h-full px-5 duration-500',
	menuStore.isMenuOpen ? 'w-[1440px]' : 'w-[1360px]',
]);

const containerStyle = computed(() =>
	menuStore.isMenuOpen ? null : { marginLeft: '65px' }
);

onMounted(async () => {
	const isLoadingStore = useIsLoadingStore();
	const authStore = useAuthStore();
	const router = useRouter();
	try {
		const user = await account.get()
		if (user) {
			authStore.set(user)
		}
	} catch (error) {
		alert(`Something went wrong: ${error.message || error}`)
		router.push('/login')
	} finally {
		isLoadingStore.set(false)
	}
})
</script>

<template>
	<LayoutLoader v-if="isLoadingStore.isLoading" />
	<section v-else class="w-[1440px] relative h-full">
		<LayoutSidebar v-if="authStore.isAuth" />
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
