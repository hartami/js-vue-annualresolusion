<template>
  <div class="about">
    <h1>This is {{their_name}} 's resolution of the year</h1>
    <p>This year I wanna focus on my own personal development. I am excited to learn so many things. I am interested to various new things. So, I make some goals to help me be more well-organized. Also, I want to enjoy each process to reach these goals. No much pressure. Just more relaxed, but let things happen.</p>
  </div>
</template>

<script>
export default {
  name: "Goals",
  data() {
    return {
      their_name: this.$route.params.name
    };
  }
};
</script>
