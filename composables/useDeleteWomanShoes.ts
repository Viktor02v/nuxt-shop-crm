import {useMutation, useQueryClient} from "@tanstack/vue-query"
import {COLLECTION_WOMAN, DB_ID} from "@/app.constants"
import { DB } from "@/lib/appwrite"
import { useIsLoadingStore } from '@/store/auth.store';

export function useDeleteWomanShoes() {
	const isLoadingStore = useIsLoadingStore();
	const queryClient = useQueryClient()
	return useMutation ({
		mutationKey:['delete-woman-shoes'],
		mutationFn: async (shoesId :string) => {
			if(shoesId){
			return DB.deleteDocument(DB_ID,COLLECTION_WOMAN, shoesId)
		} 
	},
		onSuccess(){
			queryClient.invalidateQueries(["woman-shoes"])
			isLoadingStore.set(false)
			alert(`Shoes has been deleted`)
		}
	})
}