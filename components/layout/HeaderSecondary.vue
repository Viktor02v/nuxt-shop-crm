<script setup lang="ts">

</script>

<template>
	<div class="flex">
		<div class="border hover:scale-105 transition-all duration-500 bg-gradient-to-r from-[#020817] to-[#0F172A] p-2 rounded">
			<h1 class="text-3xl font-light text-left border-l-4 pl-3 ">
				<slot name="content-secondary" />
			</h1>
		</div>
	</div>
</template>


<style scoped></style>