<script lang="ts">
  import Navbar from '../lib/navbar.svelte';
  import{navbarData} from '../utils/linkUtil';
  import Matrix from '../lib/matrix.svelte';
</script>

<Matrix/>
<Navbar data={navbarData}/>

<main>
  <div class="welcome">
            <h1>Welkome to my portfolio</h1>
        </div>
</main>

<style lang="scss">

    .welcome {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #0F0;
      font-size: 48px; 
      font-weight: bold;
      z-index: 1;
      text-shadow: 0 0 10px #0F0, 0 0 20px #0F0;
      font-size: 1rem;
    }
 
</style>
