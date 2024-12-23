// composables/useUpdateOrderStatus.ts
import { useQueryClient, useMutation } from "@tanstack/vue-query";
import {DB_ID, COLLECTION_ORDERS} from "@/app.constants"
import { DB } from "@/lib/appwrite"; 

export function useUpdateOrderStatus() {
	const queryClient = useQueryClient();
	
	return useMutation({
		mutationKey: ['update-order'],
		mutationFn: async ({ orderId, newStatus }: { orderId: string; newStatus: string }) => {
			  // Ensure DB.updateDocument returns a promise
			return DB.updateDocument(DB_ID, COLLECTION_ORDERS, orderId, {
					status: newStatus
			});
		},
		onSuccess() {
			  // Invalidate queries related to orders to refetch updated data
			queryClient.invalidateQueries(["orders"]);
		}
	});
}
