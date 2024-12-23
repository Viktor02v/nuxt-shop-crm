import { useMutation, useQueryClient } from "@tanstack/vue-query";
import { COLLECTION_MAN, DB_ID } from "~/app.constants";
import { DB } from "~/lib/appwrite";
import { useIsLoadingStore } from '@/store/auth.store';



export function useDeleteManShoes() {
	const isLoadingStore = useIsLoadingStore();
	const queryClient = useQueryClient()
	return useMutation({
		mutationKey: ['delete-man-shoes'],
		mutationFn: async (shoesId: string) => {
			return DB.deleteDocument(DB_ID, COLLECTION_MAN, shoesId );
		},
		onSuccess(){
			queryClient.invalidateQueries(["man-shoes"]);
			isLoadingStore.set(false)
			alert(`Shoes has been deleted`)
		}
	});
}

