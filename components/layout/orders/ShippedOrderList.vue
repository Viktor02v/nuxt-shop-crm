<script setup lang="ts">
import { useGetShippedOrders } from "@/composables/useGetShippedOrders"

const { data: shippedOrders, isLoading:isLoadnigShipped, isError:isErrorShipped } = useGetShippedOrders()

const { selectedStatus, handleStatusChange, isPending, isErrorUpdating } = useHandleStatusChange();
</script>

<template>
		<div v-if="shippedOrders && shippedOrders?.length >= 1" id="order-list"
			class="border border-violet-900 bg-gradient-to-b from-[#020817] to-[#0F172A] rounded p-5 animation">
			<div>
				<div class="relative flex items-center justify-center">
					<h2 class="font-bold text-[1.8rem] mb-5">Shipped</h2>
					<div
						class="absolute right-2 text-end flex rounded border hover:ring-2 hover:ring-violet-900 p-2  transition-all duration-300 gap-2">
						Items:<span>{{ shippedOrders?.length }}</span></div>
				</div>

				<UiTable class="border rounded">
					<UiTableCaption></UiTableCaption>
					<UiTableHeader>
						<UiTableRow>
							<UiTableHead class="w-[100px]">
								UserId
							</UiTableHead>
							<UiTableHead>UserName</UiTableHead>
							<UiTableHead>UserNumber</UiTableHead>
							<UiTableHead>City</UiTableHead>
							<UiTableHead>Status</UiTableHead>
							<UiTableHead>DeliveryMethod</UiTableHead>
							<UiTableHead>PaymentMethod</UiTableHead>
							<UiTableHead>Created</UiTableHead>
							<UiTableHead class="text-right">
								TotalPrice
							</UiTableHead>
						</UiTableRow>
					</UiTableHeader>
					<UiTableBody v-for="order in shippedOrders" :key="order.$id"
						class="border-b hover:ring-2 hover:ring-violet-900  hover:scale-95   transition-all duration-500 animation">
						<UiTableRow>
							<UiTableCell class="font-medium">
								{{ order.userId }}
							</UiTableCell>
							<UiTableCell class="">{{ order.userName }}</UiTableCell>
							<UiTableCell class="">{{ order.userNumber }}</UiTableCell>
							<UiTableCell class="">{{ order.userCity }}</UiTableCell>
							<UiTableCell class="">{{ order.status }}</UiTableCell>
							<UiTableCell class="">{{ order.deliveryMethod }}</UiTableCell>
							<UiTableCell class="">{{ order.paymentMethod }}</UiTableCell>
							<UiTableCell class="">{{ order.createdAt }}</UiTableCell>
							<UiTableCell class="text-right">
								{{ order.totalPrice }} UAN
							</UiTableCell>
							<UiTableCell class="text-right">
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