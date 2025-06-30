<script>
// @ts-nocheck

  import Home from './home.svelte';
  import Info from './info.svelte';
  import Ervaring from './ervaring.svelte';
    import { assets } from '$app/paths';

  let current = 'home';

  function navigate(page) {
    current = page;
  }
</script>
  
<nav>
        <div class="nav_nav">
            <a class="nav-img" href="#" on:click|preventDefault={() => navigate('home')}>
                <img src="src\assets\logo.png" class="imgnavigation" alt="logo">
            </a>

        </div>
        <div class="nav_text">
            <ul>
              <li>
                 <a class="nav-link" href="#" on:click|preventDefault={() => navigate('home')}>Home</a>
              </li>
                <li> 
                  <a class="nav-link" href="#" on:click|preventDefault={() => navigate('info')}>Info</a>
                </li>
                <li> 
                  <a class="nav-link" href="#" on:click|preventDefault={() => navigate('ervaring')}>Ervaring</a>
                </li>
            </ul>
        </div>
    </nav>

<main>
  {#if current === 'home'}
    <Home />
  {:else if current === 'ervaring'}
    <Ervaring />
  {:else if current === 'info'}
    <Info />
  {/if}
</main>

<footer>
        <div class="footer__pic">
            <a href="index.html">
                <img src="src\assets\logo.png" class="imgfooter" alt="logo">
            </a>
        </div>
        <div class="footer__nav">
            <h3 class="footer-titel">Links</h3>
            <div class="footer-nav">
               <a class="footer-link" href="#" on:click|preventDefault={() => navigate('home')}>Home</a>
                <a class="footer-link" href="#" on:click|preventDefault={() => navigate('info')}>Info</a>
               <a class="footer-link" href="#" on:click|preventDefault={() => navigate('ervaring')}>Ervaring</a>
            </div>
        </div>
        <div class="footer__socials">
            <h3 class="footer-titel">Socials</h3>
            <div class="footer__social">
                <a href="https://www.facebook.com/yuyo.sarlet/" target="_blank">
                    <img src="src\assets/Facebook.svg" class="socials-icon" alt="socials">
                </a>
                <a href="https://www.instagram.com/yukiyosarlet/" target="_blank">
                    <img src="src\assets\Instagram.svg" class="socials-icon" alt="socials">
                </a>
                <a href="https://github.com/yukiyosarlet" target="_blank">
                    <img src="src\assets\github.svg" class="socials-icon" alt="socials">
                </a>
                <a href="https://www.linkedin.com/in/yukiyo-sarlet-483477311/" target="_blank">
                    <img src="src\assets\LinkdIn.svg" class="socials-icon" alt="socials">
                </a>
            </div>
        </div>
    </footer>


<style lang="scss">
    main{
    position: relative;
  }

    :global(*) {
    margin: 0;
    padding: 0;
  }
  :global(body) {
    width: 100%;
    height: 100%;
  }
 * {
	background-color: black;
	color: green;
}

nav {
	background-color: black;
	display: grid;
	grid-template-columns: 3fr 1fr;
	gap: 1rem;
}

footer {
	padding: 2rem 5rem;
	background-color: black;
	display: grid;
	grid-template-columns: 3fr 2fr 1fr;
	gap: 1rem;
}

h1,
h2,
h3,
h4,
h5 {
	color: green;
}

h1 {
	font-size: 2rem;
}
h2 {
	font-size: 1.5rem;
}
h3 {
	font-size: 1.25rem;
}

li {
	list-style: none;
}
ul {
	padding: 0;
}

a {
	color: green;
}

@keyframes typing {
	from {
		width: 0;
	}
	to {
		width: 100%;
	}
}

.nav_text {
	display: grid;
	align-items: center;
	justify-items: center;
	ul {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 1rem;
		align-items: center;
		justify-content: center;
	}
	.nav-link {
		color: green;
		text-decoration: none;
		font-size: 1.5rem;
	}

	&-img {
		height: 100%;
		display: grid;
		align-items: center;
	}
}
.imgnavigation {
	height: 5rem;
	padding: 1rem;
}

.footer {
  &-titel{
    display: grid;
		align-items: center;
		justify-items: center;
    padding-bottom: 1rem;
    padding-top: 2rem;
  }
	&__pic {
		height: 100%;
		display: grid;
		align-items: center;
		justify-items: center;
		.imgfooter {
			height: 10rem;
			padding: 1rem;
		}
	}
	&-link {
		color: green;
		text-decoration: none;
		font-size: 1rem;
		list-style: none;
    display: grid;
		align-items: center;
		justify-items: center;
	}
	&__socials {
		display: grid;
		width: 100%;
	}
	&__social {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
		align-items: center;
		width: 100%;
	}
	&-nav {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1rem;
	}
}

.socials-icon {
	height: 5rem;
}



@media (max-width: 1203px) {
footer{
  grid-template-columns: 1fr 1fr;
}

.footer {
	&__pic {
grid-column: 1 / span 2;
	}
}
}

@media (max-width: 768px) {
	footer{
  grid-template-columns: 1fr;
}
  .footer {
	&__pic {
grid-column: 1 ;
	}
}  
}
</style>
