<script>
  export let currentPage;
</script>

<nav class='flex space-x-2.5'>
  <a class='px-2.5 text-gray-500 hover:text-gray-800' href="/" class:selected={currentPage === '/'}>ertas.dev</a>
  <a class='px-2.5 text-gray-500 hover:text-gray-800' href="/posts" class:selected={currentPage === '/posts'}>Blog</a>
</nav>
<hr class='text-gray-200 mt-2.5 mb-9'>

<style>
  .selected {
    @apply bg-gradient-to-r from-green-200 to-green-50 rounded text-gray-800;
  }
</style>
