<script>
  import safe from "./safetostream.json";
  import Card from "./Card.svelte";
  import Footer from "./Footer.svelte";
</script>

<style>
  .no-border {
    border: none !important;
  }
</style>

<main>
  <div class="title">
    <h1>Safe to Stream</h1>
  </div>
  <br />

  <h2>
    Music you can use in your streams without worrying about DMCA Takedowns
  </h2>
  <br />
  <mono>
    if you want your Music listed here, contact
    <a href="https://himbo.cat">Lio</a>
    on
    <a href="https://kji.tf/twitter">Twitter</a>
    or
    <a href="/discord">Discord</a>
    ✨
  </mono>
  <br />
  <br />
  <mono>
    If you want to use this list within a Bot or similar, you can find the Data
    @
    <a class="no-border" href="/api/stream">/api/stream</a>
  </mono>
  <br />
  <br />
  {#each safe as { title, by, by_link, image, link, redirect }}
    <Card>
      {#if image}
        <a class="no-border" href={redirect}><img
            height="100px"
            width="100px"
            src={image}
            alt="{title} Coverart" /></a>
      {/if}
      <h3><a href={redirect}>{title}</a> by <a href={by_link}>{by}</a></h3>
      <p><a href={redirect}>{link}</a></p>
    </Card>
  {/each}
  <Footer />
</main>
