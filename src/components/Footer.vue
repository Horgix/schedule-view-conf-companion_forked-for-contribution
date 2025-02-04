<template>
  <footer class="footer">
    <div class="copyright">
      © {{ new Date().getFullYear() }} Publicis Sapient. Configured for PayFit. <a
      href="https://github.com/xebia-france/schedule-view-conf-companion"
      target="_blank"
      class="issues"
    >
      Source code & Questions</a>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped lang="scss">
.footer {
  font-size: .8em;
  color: lighten(black, 10);
  text-align: center;
  margin: 30px 10px;
}

.badges {
  text-align: center;
  margin: 10px;

  a {
    width: fit-content;
    display: inline;
    margin: 10px;
  }

  img {
    height: 50px;
    margin-top: 10px;
  }
}

.copyright {
  margin-top: 30px;
}

.issues {
  display: inline;
  width: fit-content;
  text-decoration: underline;
}
</style>
