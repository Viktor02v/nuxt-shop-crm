<script setup lang="ts">
import { useGetManShoes } from "@/composables/useGetManShoes"
import { useGetWomanShoes } from "@/composables/useGetWomanShoes"

const { data: manShoes, isPending, isError } = useGetManShoes()
const { data: womanShoes, isPending: isPendingWoman, isError: isErrorWoman } = useGetWomanShoes()

</script>

<template>
	<div class="w-full">
		<!-- Header -->
		<LayoutHeaderSecondary>
			<template #content-secondary>
				Collections
			</template>
		</LayoutHeaderSecondary>

		<div class="w-full">

			<div class="p-3 w-full">
				<h2 class="text-[1.3rem] text-center p-2 border rounded mb-2 mt-5">Man Items</h2>
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
								{{ shoes.price }} UAN
							</UiTableCell>
						</UiTableRow>
					</UiTableBody>
				</UiTable>
			</div>

			<div class="p-3 w-full">
				<h2 class="text-[1.3rem] text-center p-2 border rounded  mb-2 mt-5">Woman Items</h2>
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

							</UiTableCell>
						</UiTableRow>
					</UiTableBody>
				</UiTable>
			</div>
		</div>
	</div>
</template>

<style scoped></style>