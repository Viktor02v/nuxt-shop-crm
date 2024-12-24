<script setup lang="ts">
import { useCreateShoesMan } from "~/composables/useCreateShoesMan";
import { useCreateShoesWoman } from "~/composables/useCreateShoesWoman";
import type { ItemMan, InputFileEvent } from "@/types/shoes.types";
import { useForm } from "vee-validate";
import { useMutation } from "@tanstack/vue-query";
import { STORAGE_ID } from "~/app.constants";
import { storage } from "@/lib/appwrite";
import { v4 as uuid } from "uuid";
import { defineProps, defineEmits, watch } from "vue";

// Define props and emits
defineProps({
	formValues: Object,
});

const emit = defineEmits(["update:formValues"]);

// Use the composables
const { mutate, isPending } = useCreateShoesMan();
const { mutate: mutateWoman, isPending: isPendingWoman } = useCreateShoesWoman();
const { handleSubmit, defineField, handleReset, setFieldValue, values } = useForm();

// Define fields for form validation
const [name, nameAttrs] = defineField("name");
const [vendor, vendorAttrs] = defineField("vendor");
const [price, priceAttrs] = defineField("price");
const [description, descriptionAttrs] = defineField("description");

// Image upload mutation
const { mutate: uploadImage, isPending: isUploadImagePending } = useMutation({
	mutationKey: ["uploadImage"],
	mutationFn: (payload: { file: File; field: keyof ItemMan }) =>
		storage.createFile(STORAGE_ID, uuid(), payload.file),
	onSuccess(data, { field }) {
		const response = storage.getFileDownload(STORAGE_ID, data.$id);
		setFieldValue(field, response);
	},
});

// File change handler
const handleFileChange = (event: InputFileEvent, field: keyof ItemMan) => {
	const file = event.target.files?.[0];
	if (file) {
		uploadImage({ file, field });
	}
};

// Submit form for creating shoes
const createShoes = async (type: "man" | "woman") => {
	await handleSubmit(async (values) => {
		// Basic validation check
		if (!values.name || !values.vendor || !values.price || !values.description || !values.foto_url) {
			alert("Please fill out all fields before creating an item.");
			return;
		}

		// Form data
		const shoes: ItemMan = {
			name: values.name,
			price: parseFloat(values.price),
			vendor: values.vendor,
			description: values.description,
			foto_url: values.foto_url,
		};

		// Select the mutation function based on type
		const mutateFunction = type === "man" ? mutate : mutateWoman;

		mutateFunction(shoes, {
			onSuccess: () => {
				handleReset();
				alert(`Shoe created successfully for ${type}!`);
			},
		});
	})();
};

// Watch form values for updates
watch(() => values, (newValues) => {
	emit("update:formValues", newValues);
}, { deep: true });
</script>

<template>
	<div>
		<form @submit.prevent class="flex flex-col gap-4">
			<div>
				<img v-if="values.foto_url || isUploadImagePending" :src="values.foto_url" alt="Shoe image" width="80"
					height="50"
					class="rounded-full border my-4 hover:scale-110 p-2 transition-all duration-500 hover:ring-1" />
				<UiInput type="file" @change="handleFileChange($event, 'foto_url')" />
			</div>

			<UiInput v-model="name" v-bind="nameAttrs" placeholder="Name..." type="text" />
			<UiInput v-model="vendor" v-bind="vendorAttrs" placeholder="Vendor..." type="text" />
			<UiInput v-model="price" v-bind="priceAttrs" placeholder="Price..." type="number" />
			<UiTextarea v-model="description" v-bind="descriptionAttrs" placeholder="Description..."></UiTextarea>

			<div class="flex gap-5 justify-center">
				<button @click.prevent="createShoes('man')" class="btn-submit"
					:disabled="isPending || isUploadImagePending">
					Create Man
				</button>
				<button @click.prevent="createShoes('woman')" class="btn-submit"
					:disabled="isPendingWoman || isUploadImagePending">
					Create Woman
				</button>
			</div>
		</form>
	</div>
</template>

<style scoped>
.btn-submit {
	background-color: #16223f;
	color: white;
	padding: 0.5rem 1.5rem;
	border: 2px solid #16223f;
	text-transform: uppercase;
	font-size: 1.1rem;
	border-radius: 0.375rem;
	transition: all 0.3s ease;
}

.btn-submit:hover {
	background-color: #1f2a47;
	transform: scale(1.05);
}

.btn-submit:disabled {
	background-color: #3a4b62;
	cursor: not-allowed;
}
</style>
