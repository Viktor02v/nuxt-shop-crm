<script setup lang="ts">
import { useIsLoadingStore, useAuthStore } from '@/store/auth.store';
import { v4 as uuid } from 'uuid'
import { account } from '~/lib/appwrite';

useSeoMeta({
	title: "Login | CRM",
});

// User data
const email = ref('')
const name = ref('')
const password = ref('')

// Call useLoadingStore
const isLoadingStore = useIsLoadingStore()
// Call authStore
const authStore = useAuthStore()

// Call useRouter
const router = useRouter()

// Function to Login
const login = async () => {
	try {
		isLoadingStore.set(true); // Start loading
		await account.createEmailPasswordSession(email.value, password.value); // Create session
		const response = await account.get(); // Fetch user data

		if (response) {
			authStore.set({
				email: response.email,
				name: response.name,
				status: response.status,
			});
		}

		// Reset user data
		email.value = '';
		password.value = '';
		name.value = '';

		// Navigate to home page
		await router.push('/');
	} catch (error) {
		alert(`Login failed:, ${error}`);
	} finally {
		isLoadingStore.set(false); // Stop loading
	}
};


</script>

<template>
	<div class="flex items-center justify-center h-screen ">
		<div class="rounded border bg-gradient-to-b from-[#020817] to-[#0F172A] w-10/12 md:w-1/3 p-5 ">
			<h1 class="text-2xl text-white hover:text-colorSidebar font-bold text-center mb-5">Login</h1>

			<form @keyup.enter="login">
				<UiInput v-model="email" placeholder="Email" type="email" class="mb-3" />
				<UiInput v-model="password" placeholder="Password" type="password" class="mb-3" />
				<UiInput v-model="name" placeholder="Name" type="text" class="mb-3" />

				<div class="flex items-center justify-center gap-5">
					<UiButton @click="login" class="text-white" variant="secondary" type="button">Login
					</UiButton>
				</div>
			</form>
		</div>
	</div>
</template>

<style scoped></style>