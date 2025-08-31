<template>
    <div>
      <NavBar />
      <SocialLinks />
      <v-lazy :min-height="200" :options="{ 'threshold': 0.5 }" transition="fade-transition" id="about">
        <About class="mt-16" />
      </v-lazy>
      <v-lazy :min-height="200" :options="{ 'threshold': 0.5 }" transition="fade-transition" id="skills">
        <SkillsExperienceEducation class="mt-16" />
      </v-lazy>
      <v-lazy :min-height="200" :options="{ 'threshold': 0.5 }" transition="fade-transition" id="services">
        <MyServices class="mt-16" />
      </v-lazy>
      <div>
        <v-lazy :min-height="200" :options="{ 'threshold': 0.5 }" transition="fade-transition" id="portfolio">
          <MyPortfolio class="mt-16"/>
        </v-lazy>
      </div>
      <ScrollToTopButton class="z-10 cursor-pointer" />
    </div>
  </template>
  