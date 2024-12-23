<script setup lang="ts">
import { useGetOrders } from "@/composables/useGetOrders"
import { useGetConfirmedOrders } from "@/composables/useGetConfirmedOrders"

const { data: orders, isLoading, isError } = useGetOrders()
const { data: confirmedOrders, isLoading:isLoadnigConfirmed, isError:isErrorConfirmed } = useGetConfirmedOrders()
</script>

<template>
	<div class="w-full p-5">
		<LayoutHeaderSecondary class="mb-10">
			<template #content-secondary>
				Orders
			</template>
		</LayoutHeaderSecondary>

		<LayoutOrdersOrderList class="mb-10" />

		<LayoutOrdersConfirmedOrderList class="mb-10"/>
	</div>
</template>



<style scoped></style>