<script setup lang="ts">
import { useGetConfirmedOrders } from "@/composables/useGetConfirmedOrders"

const { data: confirmedOrders, isLoading:isLoadnigConfirmed, isError:isErrorConfirmed } = useGetConfirmedOrders()
</script>

<template>
		<div v-if="confirmedOrders && confirmedOrders?.length >= 1" id="order-list"
			class="border border-green-500 bg-gradient-to-b from-[#020817] to-[#0F172A] rounded p-5">
			<div>
				<div class="relative flex items-center justify-center">
					<h2 class="font-bold text-[1.8rem] mb-5">Confirmed Orders</h2>
					<div
						class="absolute right-2 text-end flex rounded border hover:ring-2 hover:ring-green-500 p-2  transition-all duration-300 gap-2">
						Items:<span>{{ confirmedOrders?.length }}</span></div>
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
					<UiTableBody v-for="order in confirmedOrders" :key="order.$id"
						class="border-b hover:ring-2 hover:ring-green-500 hover:scale-95   transition-all duration-500">
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

								<UiSelect>
									<UiSelectTrigger>
										<UiSelectValue placeholder="Change" />
									</UiSelectTrigger>
									<UiSelectContent>
										<UiSelectGroup>
											<UiSelectItem value="shiped">
												Ship
											</UiSelectItem>
											<UiSelectItem value="delete">
												<UiButton class="bg-red-500 text-white hover:bg-red-700 border">
													<Icon name="weui:delete-outlined" size="20" />
												</UiButton>
											</UiSelectItem>
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

</style>