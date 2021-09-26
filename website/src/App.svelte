<script lang="ts">
   import { Router, Route } from 'svelte-navigator';
   import Home from './pages/Home.svelte';
   import Pong from './pages/Pong.svelte';
   import Snake from './pages/Snake.svelte';
</script>

<main>
   <Router>
      <Route path="pong">
         <Pong />
      </Route>
      <Route path="snake">
         <Snake />
      </Route>
      <Route path="*">
         <Home />
      </Route>
   </Router>
</main>

<style>
   main {
      height: 100%;
}
</style>
