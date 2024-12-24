<script setup lang="ts">
import { useGetOrders } from "@/composables/useGetOrders"

const { data: orders, isLoading, isError } = useGetOrders()
</script>

<template>
	<div class="w-full p-5">
		<LayoutHeaderSecondary class="mb-10">
			<template #content-secondary>
				Orders
			</template>
		</LayoutHeaderSecondary>

		<!-- Loading State -->
		<div v-if="isLoading" class="text-center">Loading orders...</div>

		<!-- Error State -->
		<div v-if="isError" class="text-center text-red-500">
			There was an error loading the orders. Please try again.
		</div>

		<div v-else>
			<LayoutOrdersOrderList class="mb-10" />

			<LayoutOrdersConfirmedOrderList class="mb-10" />

			<LayoutOrdersShippedOrderList class="mb-10" />
		</div>
	</div>
</template>



<style scoped>

</style>