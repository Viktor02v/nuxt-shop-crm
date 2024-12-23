<script setup lang="ts">
import { useCreateShoesMan } from "~/composables/useCreateShoesMan";
import { useCreateShoesWoman } from "~/composables/useCreateShoesWoman";
import type { ItemMan, InputFileEvent } from "@/types/shoes.types";
import { useForm } from "vee-validate";
import { useMutation } from "@tanstack/vue-query";
import { STORAGE_ID } from "~/app.constants";
import { storage } from "@/lib/appwrite";
import { v4 as uuid } from "uuid";
import { defineProps, defineEmits } from "vue";

// Emit the updated values to the parent
defineProps({
	formValues: Object,
});

const emit = defineEmits(["update:formValues"]);

const { mutate, isPending } = useCreateShoesMan();
const { mutate: mutateWoman, isPending: isPendingWoman } = useCreateShoesWoman();
const { handleSubmit, defineField, handleReset, setFieldValue, values } = useForm();

const [name, nameAttrs] = defineField("name");
const [vendor, vendorAttrs] = defineField("vendor");
const [price, priceAttrs] = defineField("price");
const [description, descriptionAttrs] = defineField("description");

const { mutate: uploadImage, isPending: isUploadImagePending } = useMutation({
	mutationKey: ["uploadImage"],
	mutationFn: (payload: { file: File; field: keyof ItemMan }) =>
		storage.createFile(STORAGE_ID, uuid(), payload.file),
	onSuccess(data, { field }) {
		const response = storage.getFileDownload(STORAGE_ID, data.$id);
		setFieldValue(field, response);
	},
});

const handleFileChange = (event: InputFileEvent, field: keyof ItemMan) => {
	const file = event.target.files?.[0];
	if (file) {
		uploadImage({ file, field });
	}
};

const addShoes = (type: "man" | "woman") => {
	handleSubmit((values) => {
		if (!values.name || !values.vendor || !values.price || !values.description || !values.foto_url) {
			alert("Please fill out all the fields before creating an item.");
			return;
		}
		
		const shoes: ItemMan = {
			name: values.name,
			price: parseFloat(values.price),
			vendor: values.vendor,
			description: values.description,
			foto_url: values.foto_url,
		};

		const mutateFunction = type === "man" ? mutate : mutateWoman;

		mutateFunction(shoes, {
			onSuccess: () => {
				handleReset();
				alert(`Shoe created successfully for ${type}!`);
			},
		});
	})();
};

watch(
	() => values,
	(newValues) => {
		emit("update:formValues", newValues);
	},
	{ deep: true }
);
</script>

<template>
	<div>
		<form @submit.prevent class="flex flex-col gap-2">
			<div>
				<img v-if="values.foto_url || isUploadImagePending" :src="values.foto_url" alt="" width="80" height="50"
					class="rounded-full border my-4 hover:scale-110 p-2 transition-all duration-500 hover:ring-1" />
				<UiInput type="file" @change="handleFileChange($event, 'foto_url')" />
			</div>
			<UiInput v-model="name" v-bind="nameAttrs" placeholder="Name..." type="text" />
			<UiInput v-model="vendor" v-bind="vendorAttrs" placeholder="Vendor..." type="text" />
			<UiInput v-model="price" v-bind="priceAttrs" placeholder="Price..." type="number" />
			<UiTextarea v-model="description" v-bind="descriptionAttrs" placeholder="Description...">
			</UiTextarea>

			<div class="flex gap-5 justify-center">
				<button @click.prevent="addShoes('man')"
					class="text-white py-1 px-3 border hover:scale-110 transition-all duration-300 hover:bg-[#16223f] rounded text-[1.3rem]"
					:disabled="isPending || isUploadImagePending">
					Create Man
				</button>
				<button @click.prevent="addShoes('woman')"
					class="text-white py-1 px-3 border hover:scale-110 transition-all duration-300 hover:bg-[#16223f] rounded text-[1.3rem]"
					:disabled="isPendingWoman || isUploadImagePending">
					Create Woman
				</button>
			</div>
		</form>
	</div>
</template>

<style scoped></style>