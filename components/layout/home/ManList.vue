<script setup lang="ts">
import { useGetManShoes } from "@/composables/useGetManShoes";
import { useDeleteManShoes } from "@/composables/useDeleteManShoes";
import { useHandleDelete } from "@/composables/useHandleDelete";

const { data: manShoes, isPending, isError, error } = useGetManShoes();
const { mutate: deleteShoe, isPending: isDeleting } = useDeleteManShoes();
const { handleDelete } = useHandleDelete();

const onDelete = (shoeId: string) => handleDelete(shoeId, deleteShoe);
</script>

<template>
	<div>
		<!-- Loading State -->
		<div v-if="isPending" aria-live="polite">
			Man Collection is Loading...
		</div>

		<!-- Error State -->
		<div v-else-if="isError" role="alert">
			{{ error?.message }}
		</div>

		<!-- Loaded Data -->
		<div v-else class="animation">
			<h2 class="text-lg text-center p-2 gradient-bg border rounded mb-2 mt-5">
				Man Items
			</h2>

			<UiTable class="border-2 gradient-bg">
				<UiTableCaption>{{ manShoes?.length }} items</UiTableCaption>
				<UiTableHeader>
					<UiTableRow>
						<UiTableHead class="w-[100px]">Name</UiTableHead>
						<UiTableHead>Vendor</UiTableHead>
						<UiTableHead class="text-right">Foto</UiTableHead>
						<UiTableHead class="text-right">Price</UiTableHead>
						<UiTableHead class="text-right">Actions</UiTableHead>
					</UiTableRow>
				</UiTableHeader>

				<UiTableBody>
					<UiTableRow v-for="shoes in manShoes" :key="shoes.$id"
						class="text-sm hover:translate-x-2 transition-all duration-500">
						<UiTableCell class="font-medium border-r">{{ shoes.name }}</UiTableCell>
						<UiTableCell class="border-r">{{ shoes.vendor }}</UiTableCell>
						<UiTableCell class="flex justify-end">
							<NuxtImg :src="shoes.foto_url" width="60" />
						</UiTableCell>
						<UiTableCell class="text-right">{{ shoes.price }} UAN</UiTableCell>
						<UiTableCell class="text-right">
							<UiButton @click="onDelete(shoes.$id)" :disabled="isDeleting"
								class="bg-red-500 text-white hover:bg-red-700 border">
								<Icon name="weui:delete-outlined" size="25" v-if="!isDeleting" />
								<Loader v-else />
							</UiButton>
						</UiTableCell>
					</UiTableRow>
				</UiTableBody>
			</UiTable>
		</div>
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
