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

		<LayoutOrdersOrderList class="mb-10" />

		<LayoutOrdersConfirmedOrderList class="mb-10" />

		<LayoutOrdersShippedOrderList class="mb-10" />
	</div>
</template>



<style scoped>

</style>