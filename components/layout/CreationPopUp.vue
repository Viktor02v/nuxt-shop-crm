<script setup lang="ts">

</script>

<template>
	<div class="w-full flex items-center justify-center h-[100vh] page-container evaporation">
		<div class="border rounded bg-gradient-to-b from-[#020817] to-[#0F172A]  w-1/2 content-box">
			<div class="flex flex-col items-center justify-center">

				<div class="p-5 flex items-center gap-5 fade-in">
					<h1 class="text-5xl font-bold">Service in Creation</h1>
					<Icon class="" name="game-icons:direction-signs" size="60" />
				</div>

				<div class="p-5 scale-up evaporation">
					<Icon class="" name="mdi:creation-outline" size="150" />
				</div>

				<NuxtLink to="/" class="p-5">
					<UiButton
						class="p-8 text-4xl text-white border font-light hover:ring-2 hover:ring-indigo-800 transition-all duration-400 bg-gradient-to-b from-[#020817] to-[#0F172A] button-slide-up">
						Go Back</UiButton>
				</NuxtLink>
			</div>
		</div>
	</div>
</template>


<style scoped>
.page-container {
	opacity: 0;
	transform: translateY(30px);
	animation: fade-in 1s ease-out forwards;
}

.content-box {
	opacity: 0;
	transform: scale(0.9);
	animation: scale-up 1s ease-out 0.5s forwards;
}

.fade-in {
	opacity: 0;
	transform: translateX(-20px);
	animation: fade-in 1s ease-out forwards;
}

.scale-up {
	opacity: 0;
	transform: scale(0);
	animation: scale-up 0.8s ease-out forwards;
}

.button-slide-up {
	opacity: 0;
	transform: translateY(20px);
	animation: slide-up 1s ease-out forwards;
}

/* Keyframes */
@keyframes fade-in {
	from {
		opacity: 0;
		transform: translateX(-20px);
	}

	to {
		opacity: 1;
		transform: translateX(0);
	}
}

@keyframes scale-up {
	from {
		opacity: 0;
		transform: scale(0);
	}

	to {
		opacity: 1;
		transform: scale(1);
	}
}

@keyframes slide-up {
	from {
		opacity: 0;
		transform: translateY(20px);
	}

	to {
		opacity: 1;
		transform: translateY(0);
	}
}

.evaporation {
	position: relative;
	animation: evaporate 2s ease-out forwards;
	opacity: 1;
}

@keyframes evaporate {
	0% {
		opacity: 0;
		transform: scale(1.5);
		filter: blur(4px);

	}
	50% {
		opacity: 0.5;
		transform: scale(1.2);
		filter: blur(2px);
	}
	100% {
		opacity: 1;
		transform: scale(1);
		filter: blur(0);
	}
}
</style>
