<template>
    <nav class="flex justify-between items-center shadow-md py-3 sticky top-0 z-10">
        <!-- LOGO -->
        <div class="ml-5 md:ml-10">
            <h1 class="text-green-500 text-4xl rounded-full text-center cursor-pointer py-1"
                style="width: 50px; height: 50px; border: 1px solid; border-radius: 50%;">S</h1>
        </div>
        <!-- LINKS IN LARGE SCREEN -->
        <div class="mr-10 hidden lg:block">
            <ul class="flex gap-20 items-center font-semibold">
                <li><a href="#about" @click.prevent="scrollToSection('about')">About</a></li>
      <li><a href="#skills" @click.prevent="scrollToSection('skills')">Skills & Experience</a></li>
      <li><a href="#services" @click.prevent="scrollToSection('services')">My Services</a></li>
      <li><a href="#portfolio" @click.prevent="scrollToSectiony('portfolio')">My Portfolio</a></li>
                <li class="flex gap-2 items-center">
                   <DarkLightMode />
                </li>
            </ul>
        </div>
        <!-- LINKS IN SMALL SCREEN -->
        <div class="mr-5 md:mr-10 lg:hidden flex items-center gap-2">
            <DarkLightMode />

        </div>
    </nav>
</template>

<script setup>
const colorMode = useColorMode()
const scrollToSectiony = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    // استخدام setTimeout لضبط الإزاحة بعد التمرير السلس
    setTimeout(() => {
      window.scrollBy({
        top: -100,
        left: 0,
        behavior: 'smooth'
      });
    }, 500); // الوقت هنا لضمان انتهاء التمرير الأول قبل إضافة الإزاحة
  }
};
</script>

<style>
body {
    background-color: #fff;
    color: rgba(0, 0, 0, 0.8);
}

body nav {
    background-color: #dbd5d5;
}

.dark-mode body {
    background-color: #091a28;
    color: #19c53e;
    border-color: #19c53e;
}

.dark-mode nav {
    background-color: #0e3250;

}

.dark-mode h3 {
    color: white;
}

.sepia-mode body {
    background-color: #f1e7d0;
    color: #433422;
}

.sepia-mode nav {
    background-color: #f5dda8;

}
</style>