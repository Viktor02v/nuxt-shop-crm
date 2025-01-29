import { COLLECTION_WOMAN, DB_ID,  } from "~/app.constants";
import { DB } from "~/lib/appwrite";
import {v4 as uuid} from "uuid"
import { useMutation, useQueryClient } from "@tanstack/vue-query"

export function useCreateShoesWoman(){
	const queryClient = useQueryClient(); 
	return useMutation({
		mutationKey:['createShoesWoman'],
		mutationFn: async (shoes) => {
			return DB.createDocument(DB_ID, COLLECTION_WOMAN , uuid(), shoes);
		},
		onSuccess() {
			queryClient.invalidateQueries(["woman-shoes"]);
		}
	})
}
