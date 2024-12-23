<script setup lang="ts">
import { useGetOrders } from "@/composables/useGetOrders";
import {useHandleStatusChange} from "@/composables/useHandleStatusChange"

const { data: orders, isLoading, isError } = useGetOrders();

const { selectedStatus, handleStatusChange, isPending, isErrorUpdating } = useHandleStatusChange();
</script>

<template>
	<div v-if="orders && orders?.length >= 1" id="order-list"
		class="border border-indigo-500 bg-gradient-to-b from-[#020817] to-[#0F172A] rounded p-5 animation">
		<div>
			<div class="relative flex items-center justify-center">
				<h2 class="font-bold text-[1.8rem] mb-5">Order List</h2>
				<div
					class="absolute right-2 text-end flex rounded border hover:ring-2 hover:ring-indigo-700 p-2 transition-all duration-300 gap-2">
					Items: <span>{{ orders?.length }}</span>
				</div>
			</div>

			<UiTable class="border rounded">
				<UiTableCaption></UiTableCaption>
				<UiTableHeader>
					<UiTableRow>
						<UiTableHead class="w-[100px]">UserId</UiTableHead>
						<UiTableHead>UserName</UiTableHead>
						<UiTableHead>UserNumber</UiTableHead>
						<UiTableHead>City</UiTableHead>
						<UiTableHead>Status</UiTableHead>
						<UiTableHead>DeliveryMethod</UiTableHead>
						<UiTableHead>PaymentMethod</UiTableHead>
						<UiTableHead>Created</UiTableHead>
						<UiTableHead class="text-right">TotalPrice</UiTableHead>
					</UiTableRow>
				</UiTableHeader>
				<UiTableBody v-for="order in orders" :key="order.$id"
					class="border-b hover:ring-2 hover:ring-indigo-500 scale-95 hover:scale-100 transition-all duration-500 animation">
					<UiTableRow>
						<UiTableCell class="font-medium">{{ order.userId }}</UiTableCell>
						<UiTableCell>{{ order.userName }}</UiTableCell>
						<UiTableCell>{{ order.userNumber }}</UiTableCell>
						<UiTableCell>{{ order.userCity }}</UiTableCell>
						<UiTableCell>{{ order.status }}</UiTableCell>
						<UiTableCell>{{ order.deliveryMethod }}</UiTableCell>
						<UiTableCell>{{ order.paymentMethod }}</UiTableCell>
						<UiTableCell>{{ order.createdAt }}</UiTableCell>
						<UiTableCell class="text-right">{{ order.totalPrice }} UAN</UiTableCell>
						<UiTableCell class="text-right">
							<UiSelect v-model="selectedStatus" @update:model-value="handleStatusChange(order.$id)">
								<UiSelectTrigger>
								</UiSelectTrigger>
								<UiSelectContent>
									<UiSelectGroup>
										<UiSelectItem value="confirmed">Confirm</UiSelectItem>
										<UiSelectItem v-if="order.status === 'confirmed'" value="pending">Unconfirm</UiSelectItem>
										<UiButton class="bg-red-500 text-white hover:bg-red-700 border">
											<Icon name="weui:delete-outlined" size="20" />
										</UiButton>
									</UiSelectGroup>
								</UiSelectContent>
							</UiSelect>
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
