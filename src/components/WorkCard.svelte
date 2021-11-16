<script>
  export let url, title, description;
</script>

<li class="bg-green-50 p-2.5 rounded">
  <a class='font-semibold underline text-green-600 hover:text-green-800 mb-2.5 block' href={url} target="_blank">{title}</a>
  <p class='text-gray-600'>{description}</p>
</li>
