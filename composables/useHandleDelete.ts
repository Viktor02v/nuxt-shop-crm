import { useIsLoadingStore } from '@/store/auth.store';

export function useHandleDelete() {
  const isLoadingStore = useIsLoadingStore();

  const handleDelete = (shoesId: string, mutate: Function) => {
    if (!shoesId) return;

    isLoadingStore.set(true);

    if (confirm('Are you sure you want to delete this shoes?')) {
      mutate(shoesId, {
        onSuccess: () => {
          alert('Shoe deleted successfully!');
          isLoadingStore.set(false);
        },
        onError: (errorDeleting:any) => {
          alert(`Failed to delete: ${errorDeleting.message}`);
          isLoadingStore.set(false);
        },
      });
    } else {
      isLoadingStore.set(false); // Reset if the user cancels
    }
  };

  return { handleDelete };
}
