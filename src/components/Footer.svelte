<script>
  import dayjs from 'dayjs'

  let year = dayjs().format('YYYY')
</script>

<footer class='text-xs md:text-sm w-full flex flex-col md:flex-row items-center space-y-2.5 md:space-y-0 md:justify-between mt-5'>
  <p>All rights reserved © Oz Ertas {year}</p>

  <ul class="flex space-x-2.5">
    <li><a class='underline text-green-600 hover:text-green-800' href="https://github.com/oerts">github</a></li>
    <li><a class='underline text-green-600 hover:text-green-800' href="https://twitter.com/ertsoz">twitter</a></li>
    <li><a class='underline text-green-600 hover:text-green-800' href="https://dev.to/oerts">dev.to</a></li>
  </ul>
</footer>
