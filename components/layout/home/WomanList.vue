<script setup lang="ts">
import { useGetWomanShoes } from "@/composables/useGetWomanShoes"
import { useDeleteWomanShoes } from "@/composables/useDeleteWomanShoes"
import { useHandleDelete } from "@/composables/useHandleDelete"

const { data: womanShoes, isPending: isPending, isError: isError, error } = useGetWomanShoes()
const { mutate, isPending: isDeleting, isError: isErrorDeleting, error: errorDeleting } = useDeleteWomanShoes()
const { handleDelete } = useHandleDelete();


const onDelete = (shoesId: string) => handleDelete(shoesId, mutate);

</script>

<template>
<div v-if="isPending">
		Woman Collection is Loading...
	</div>

	<div v-else-if="womanShoes" class="animation">
		<h2 class="text-[1.3rem] text-center p-2 border bg-gradient-to-b from-[#020817] to-[#0F172A] rounded  mb-2 mt-5">
			Woman Items</h2>
		<UiTable class="border-2 bg-gradient-to-r from-[#020817] to-[#0F172A]">
			<UiTableCaption>{{ womanShoes?.length }} items</UiTableCaption>
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
			<UiTableBody v-for="shoes in womanShoes " :key="shoes.$id" class="border-b">
				<UiTableRow class="text-[1rem] hover:translate-x-2 transition-all duration-500">
					<UiTableCell class=" border-r">
						{{ shoes.name }}
					</UiTableCell>
					<UiTableCell class="border-r ">{{ shoes.vendor }}</UiTableCell>
					<UiTableCell class="flex">
						<div class="w-full flex items-cetner justify-end ">
							<NuxtImg :src="shoes.foto_url" width="60" />
						</div>
					</UiTableCell>
					<UiTableCell class="text-right">
						{{ shoes.price }} UAN
					</UiTableCell>
					<UiTableCell class="text-right">
						<UiButton @click="onDelete(shoes.$id)" class="bg-red-500 text-white hover:bg-red-700 border">
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