<script>
  import WorkCard from './WorkCard.svelte'
  const examples = [
  {
    'url': 'https://seacraft.me',
    'title': 'seacraft.me',
    'description': 'Artist portfolio made with SvelteKit and GhostCMS.'
  },
  {
    'url': 'https://qukbuk.erts.pw',
    'title': "qukbuk",
    'description': "(Coming soon) An app I built for my wife so she doesn't lose her recipes."
  }
  ]
</script>

<h2 class='text-lg md:text-xl font-semibold mb-2.5'>Work</h2>

<ul class='flex flex-col space-y-5'>
{#each examples as {url, title, description}}
  <WorkCard {url} {title} {description} />
{/each}
</ul>
