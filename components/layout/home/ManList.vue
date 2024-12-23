<script setup lang="ts">
import { useGetManShoes } from "@/composables/useGetManShoes"
import { useDeleteManShoes } from "@/composables/useDeleteManShoes"
import { useIsLoadingStore } from '@/store/auth.store';

const isLoadingStore = useIsLoadingStore();

const { data: manShoes, isPending, isError, error } = useGetManShoes()

const { mutate, isPending: isDeleting, isError: isErrorDeleting, error: errorDeleting } = useDeleteManShoes()


const handleDelete = (shoesId: string) => {
	isLoadingStore.set(true)
	if (confirm('Are you sure you want to delete this shoes?')) {
		mutate(shoesId, {
			onError: (errorDeleting) => alert(`Failed to delete: ${errorDeleting.message}`),
		});
	};
}
</script>

<template>
	<div v-if="isPending">
		Loading...
	</div>

	<div v-else-if="manShoes" class="animation">
		<h2 class="text-[1.3rem] text-center p-2 bg-gradient-to-b from-[#020817] to-[#0F172A] border rounded mb-2 mt-5">
			Man Items</h2>
		<UiTable class="border-2 bg-gradient-to-l from-[#020817] to-[#0F172A] ">
			<UiTableCaption>{{ manShoes?.length }} items</UiTableCaption>
			<UiTableHeader>
				<UiTableRow>
					<UiTableHead class="w-[100px]">
						Name
					</UiTableHead>
					<UiTableHead>Vendor</UiTableHead>
					<UiTableHead class="text-right">Foto</UiTableHead>
					<UiTableHead class="text-right">
						Price
					</UiTableHead>
				</UiTableRow>
			</UiTableHeader>
			<UiTableBody v-for="shoes in manShoes " :key="shoes.$id" class="border-b">
				<UiTableRow class="text-[1rem] hover:translate-x-2 transition-all duration-500">
					<UiTableCell class="font-medium border-r">
						{{ shoes.name }}
					</UiTableCell>
					<UiTableCell class="border-r">{{ shoes.vendor }}</UiTableCell>
					<UiTableCell class="flex">
						<div class="w-full flex items-cetner justify-end ">
							<NuxtImg :src="shoes.foto_url" width="60" />
						</div>
					</UiTableCell>
					<UiTableCell class="text-right">
						{{ shoes.price }} UAN
					</UiTableCell>
					<UiTableCell class="text-right">
						<UiButton @click="handleDelete(shoes.$id)" class="bg-red-500 text-white hover:bg-red-700 border">
							<Icon name="weui:delete-outlined" size="25" />
						</UiButton>
					</UiTableCell>
				</UiTableRow>
			</UiTableBody>
		</UiTable>
	</div>

	<div v-else-if="isError">
		{{ error?.message }}
	</div>
</template>



<style scoped>
@keyframes show {
	from {
		transform: scale(0.5) translateY(-30px);
		opacity: 0.4;
	}

	to {
		transform: scale(1) translateY(0);
		opacity: 1;
	}
}

.animation {
	animation: show 0.6s ease-in-out;
}
</style>