<template>
    <div class="social mx-auto">
        <v-container><v-row style="margin-top: 100px"><v-col cols="12" lg="4"
                    class="my-4 lg:flex gap-5 align-center ml-10 hidden ">
                    <h1 class="text-3xl mt-4 text-sky-700 mb-6 text-center" style="font-size: 50px; font-weight: bold">
                        I'm
                    </h1>
                    <div class="your-element-selector text-3xl text-green-500 text-center "
                        style="font-size: 30px; font-weight: bold"></div>
                </v-col><v-col cols="12" lg="5">
                    <div class="lg:hidden flex gap-5 items-center">
                        <h1 class="text-3xl mt-4 text-sky-700 mb-6 text-center"
                            style="font-size: 50px; font-weight: bold">
                            I'm
                        </h1>
                        <div class="your-element-selectorr text-3xl text-green-500 text-center "
                            style="font-size: 30px; font-weight: bold"></div>
                    </div>
                    <img style="border: 4px solid greenyellow; width: 500px;height: 500px; border-radius: 50%;"
                        class="move-up-down hidden md:block mx-auto"
                        src="/public/0612c35b-34da-4222-a63e-843f9473a95d.jpeg" alt="" />
                    <img style="border: 4px solid greenyellow; width: 300px;height: 300px; border-radius: 50%;"
                        class="move-up-down  md:hidden mx-auto" src="/public/0612c35b-34da-4222-a63e-843f9473a95d.jpeg"
                        alt="" />
                </v-col><v-col cols="12" lg="2" class="text-center flex">
                    <div class="social-icons flex justify-center text-center mx-auto gap-5 align-center my-auto">
                        <!-- <a href="https://www.facebook.com/Mostafazayed2020"
                            target="_blank"><v-icon>mdi-facebook</v-icon></a> -->

                    </div>

                </v-col></v-row>
        </v-container>
    </div>
</template>

<script setup>
import Typed from "typed.js";
import { onMounted, onBeforeUnmount } from "vue";

const options = {
    strings: ["Seif Nashaat", "a web developer"],
    typeSpeed: 100,
    backSpeed: 20,
    loop: true,
    showCursor: false,
};

let typed;

onMounted(() => {
    typed = new Typed(".your-element-selector", options);
    typed = new Typed(".your-element-selectorr", options);
});

onBeforeUnmount(() => {
    typed.destroy();
});
</script>

<style>
@keyframes moveUpDown {
    0% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-10px);
    }

    100% {
        transform: translateY(0);
    }
}

.move-up-down {
    animation: moveUpDown 3s infinite;
}
</style>