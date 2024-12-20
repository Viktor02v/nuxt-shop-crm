import { COLLECTION_MAN, DB_ID,  } from "~/app.constants";
import { DB } from "~/lib/appwrite";
import {v4 as uuid} from "uuid"
import { useMutation, useQueryClient } from "@tanstack/vue-query"

export function useCreateShoes(){
	const queryClient = useQueryClient(); 
	return useMutation({
		mutationKey:['createShoes'],
		mutationFn: async (shoes) => {
			return DB.createDocument(DB_ID, COLLECTION_MAN, uuid(), shoes);
		},
		onSuccess() {
			queryClient.invalidateQueries(["man-shoes"]);
		}
	})
}
