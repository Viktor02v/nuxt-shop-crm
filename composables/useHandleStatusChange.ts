import { ref } from 'vue';
import { useUpdateOrderStatus } from '@/composables/useChangeOrderStatus';

export const useHandleStatusChange = () => {

const selectedStatus = ref<string>('something');

const { mutate, isPending, isError: isErrorUpdating } = useUpdateOrderStatus();

const handleStatusChange = (orderId: string) => {
   mutate({ orderId, newStatus: selectedStatus.value });
};

return {
   selectedStatus,
   handleStatusChange,
   isPending,
   isErrorUpdating,
};
};
