import { useQuery } from "@tanstack/vue-query";
import { COLLECTION_WOMAN, DB_ID } from "~/app.constants";
import { DB } from "~/lib/appwrite";
import type { ItemWoman } from "@/types/shoes.types";


export function useGetWomanShoes() {
	return useQuery({
		queryKey: ['woman-shoes'],
		queryFn: async () => {
			const response = await DB.listDocuments(DB_ID, COLLECTION_WOMAN);
			return response.documents as unknown as ItemWoman[];
		},
		select(data) {
			const itemsWomen = data as unknown as ItemWoman[];
			return itemsWomen;
		},
	});
}