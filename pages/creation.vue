<script setup lang="ts">
import { STORAGE_ID } from "~/app.constants";
import { storage } from "@/lib/appwrite";
import { useCreateShoes } from "@/composables/useCreateShoes";
import type { ItemMan, InputFileEvent } from "@/types/shoes.types";
import { useForm } from "vee-validate";
import { useMutation } from "@tanstack/vue-query";
import { v4 as uuid } from "uuid";


// Create Shoes Mutation
const { mutate, isPending, isError } = useCreateShoes();

// Form Validation
const { handleSubmit, defineField, handleReset, setFieldValue, setValues, values } = useForm();

const [name, nameAttrs] = defineField("name");
const [vendor, vendorAttrs] = defineField("vendor");
const [price, priceAttrs] = defineField("price");
const [description, descriptionAttrs] = defineField("description");

// Upload Image Mutation
const { mutate: uploadImage, isPending: isUploadImagePending } = useMutation({
	mutationKey: ["uploadImage"],
	mutationFn: (payload: { file: File; field: keyof ItemMan }) =>
		storage.createFile(STORAGE_ID, uuid(), payload.file),
	onSuccess(data, { field }){
		const response = storage.getFileDownload(STORAGE_ID, data.$id);
		setFieldValue(field, response);
	},
});

// Handle File Change
const handleFileChange = (event: InputFileEvent, field: keyof ItemMan) => {
	const file = event.target.files?.[0];
	if (file) {
		uploadImage({ file, field });
	}
}

// Handle Form Submission
const addShoes = handleSubmit((values) => {
	const shoes: ItemMan = {
		name: values.name,
		price: parseFloat(values.price),
		vendor: values.vendor,
		description: values.description,
		foto_url: values.foto_url,
	};
	mutate(shoes, {
		onSuccess: () => {
			handleReset(); // Reset form on success
			alert("Shoe created successfully!");
		},
	});
});

</script>


<template>
	<div class="p-5 w-full">
		<!-- Header -->
		<LayoutHeaderSecondary>
			<template #content-secondary>
				Creation
			</template>
		</LayoutHeaderSecondary>

		<div class="mt-10">
			<div class="border p-5 bg-gradient-to-r from-[#020817] to-[#0F172A]">
				<!-- Title -->
				<div class="flex justify-center mb-5">
					<h2 class="text-[1.3rem] p-2 bg-gradient-to-b from-[#020817] to-[#0F172A] border rounded">
						Create item
					</h2>
				</div>

				<!-- Form -->
				<div class="flex justify-center">
					<div class="w-1/2">
						<form @submit.prevent="addShoes" class="flex flex-col gap-2">
							<!-- File Upload -->
							<div>
								<img v-if="values.foto_url || isUploadImagePending" :src="values.foto_url" alt="" width="80"
									height="50"
									class="rounded-full border my-4 hover:scale-110 transition-all duration-500 hover:ring-1" />
								<UiInput type="file" @change="handleFileChange($event, 'foto_url')" />
							</div>

							<!-- Other Fields -->
							<UiInput v-model="name" v-bind="nameAttrs" placeholder="Name..." type="text" />
							<UiInput v-model="vendor" v-bind="vendorAttrs" placeholder="Vendor..." type="text" />
							<UiInput v-model="price" v-bind="priceAttrs" placeholder="Price..." type="number" />
							<UiTextarea v-model="description" v-bind="descriptionAttrs" placeholder="Description...">
							</UiTextarea>
							<!-- Submit Button -->
							<div class="flex justify-center">
								<button
									class="text-white py-1 px-3 border hover:scale-110 transition-all duration-300 hover:bg-[#16223f] rounded text-[1.3rem]"
									:disabled="isPending || isUploadImagePending">
									Create
								</button>
							</div>
						</form>
					</div>
				</div>
				
			</div>
		</div>
	</div>
</template>

<style scoped>

</style>