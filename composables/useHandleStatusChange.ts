// src/composables/useUpdateOrderStatus.ts
import { ref } from 'vue';
import { useUpdateOrderStatus } from '@/composables/useChangeOrderStatus';

export const useHandleStatusChange = () => {
  // Reusable ref for selected status
 const selectedStatus = ref<string>('something');

  // Mutation hook
const { mutate, isPending, isError: isErrorUpdating } = useUpdateOrderStatus();

  // Handle status change logic
const handleStatusChange = (orderId: string) => {
    // Use the selected status to update the order status
   mutate({ orderId, newStatus: selectedStatus.value });
};

return {
   selectedStatus,
   handleStatusChange,
   isPending,
   isErrorUpdating,
};
};
