<script setup lang="ts">
import { useGetWomanShoes } from "@/composables/useGetWomanShoes";
import { useDeleteWomanShoes } from "@/composables/useDeleteWomanShoes";
import { useHandleDelete } from "@/composables/useHandleDelete";

// Fetch women's shoes data
const { data: womanShoes, isPending, isError, error } = useGetWomanShoes();

// Delete functionality
const { mutate: deleteShoe, isPending: isDeleting, isError: isErrorDeleting, error: errorDeleting } = useDeleteWomanShoes();
const { handleDelete } = useHandleDelete();

// Delete handler
const onDelete = (shoesId: string) => handleDelete(shoesId, deleteShoe);
</script>

<template>
	<div>
		<!-- Loading state -->
		<div v-if="isPending" class="text-center mt-5 text-gray-500">
			Loading the Woman Collection...
		</div>

		<!-- Error state -->
		<div v-else-if="isError" class="text-center text-red-500 mt-5">
			{{ error?.message || "An error occurred while fetching the data." }}
		</div>

		<!-- Table content -->
		<div v-else-if="womanShoes?.length" class="animation">
			<h2
				class="text-[1.3rem] text-center p-2 border bg-gradient-to-b from-[#020817] to-[#0F172A] rounded mb-5 mt-5">
				Woman Items
			</h2>
			<UiTable class="border-2 bg-gradient-to-r from-[#020817] to-[#0F172A]">
				<UiTableCaption>{{ womanShoes.length }} items</UiTableCaption>

				<!-- Table header -->
				<UiTableHeader>
					<UiTableRow>
						<UiTableHead class="w-[100px]">Name</UiTableHead>
						<UiTableHead>Vendor</UiTableHead>
						<UiTableHead class="text-right">Photo</UiTableHead>
						<UiTableHead class="text-right">Price</UiTableHead>
						<UiTableHead class="text-right">Actions</UiTableHead>
					</UiTableRow>
				</UiTableHeader>

				<!-- Table body -->
				<UiTableBody>
					<UiTableRow v-for="shoes in womanShoes" :key="shoes.$id"
						class="text-[1rem] hover:translate-x-2 transition-all duration-500 border-b">
						<UiTableCell class="border-r">{{ shoes.name }}</UiTableCell>
						<UiTableCell class="border-r">{{ shoes.vendor }}</UiTableCell>
						<UiTableCell class="flex justify-end items-center">
							<NuxtImg :src="shoes.foto_url" width="60" alt="Shoe Image" />
						</UiTableCell>
						<UiTableCell class="text-right">{{ shoes.price }} UAN</UiTableCell>
						<UiTableCell class="text-right">
							<UiButton @click="onDelete(shoes.$id)" :disabled="isDeleting"
								class="bg-red-500 text-white hover:bg-red-700 border">
								<Icon name="weui:delete-outlined" size="25" />
							</UiButton>
						</UiTableCell>
					</UiTableRow>
				</UiTableBody>
			</UiTable>
		</div>

		<!-- Empty state -->
		<div v-else class="text-center mt-5 text-gray-500">
			No items found in the Woman Collection.
		</div>

		<!-- Deletion error -->
		<div v-if="isErrorDeleting" class="text-center text-red-500 mt-5">
			{{ errorDeleting?.message || "An error occurred while deleting the item." }}
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
