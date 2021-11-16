<script>
  export let currentPage;
</script>

<nav class='mb-9'>
  <a class='pr-5' href="/" class:selected={currentPage === '/'}>ertas.dev</a>
  <a class='text-gray-500 hover:text-gray-800' href="/posts" class:selected={currentPage === '/posts'}>Blog</a>
  <hr class='text-gray-200 mt-2.5'>
</nav>

<style>
  .selected {
    @apply underline;
  }
</style>
