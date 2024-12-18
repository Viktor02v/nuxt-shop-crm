<script setup lang="ts">
import { useGetManShoes } from "@/composables/useGetManShoes"
import { useGetWomanShoes } from "@/composables/useGetWomanShoes"

const { data: manShoes, isPending, isError } = useGetManShoes()
const { data: womanShoes, isPending: isPendingWoman, isError: isErrorWoman } = useGetWomanShoes()

</script>

<template>
	<div class="w-full">

		<div v-if="manShoes" class="mt-5">
			<div class="w-full items-center justify-between flex gap-5">
				<div class="w-1/2 border">
					<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-5">
						<div v-for="shoes in manShoes" :key="shoes.$id" class="">
							<div class="h-[100px] hover:scale-110 transition-all duration-500 rounded p-5 border">
								<NuxtImg :src="shoes.foto_url" class="w-full  h-full object-cover" />
							</div>
						</div>
					</div>
				</div>

				<div class="w-1/2 border">
					<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-5">
						<div v-for="shoes in womanShoes" :key="shoes.$id" class="">
							<div class="h-[100px] hover:scale-110 transition-all duration-500 p-5 border rounded">
								<NuxtImg :src="shoes.foto_url" class="w-full  h-full object-cover" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>

</style>