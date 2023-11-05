<template>
    <div id="app">
      <PersonalInfo />
      <Objective />
      <Education />
      <WorkExperience />
    </div>
  </template>
  
  <script>
  import infopersonal from '../components/infopersonal.vue';
  import objetive from '../components/objetive.vue';
  import education from '../components/education.vue';
  import workexperience from '../components/workexperience.vue';
  
  export default {
    components: {
      infopersonal,
      objetive,
      education,
      workexperience,
    },
  };
  </script>
  
  <style>
  </style>
  