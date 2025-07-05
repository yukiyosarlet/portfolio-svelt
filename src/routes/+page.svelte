<script>
// @ts-nocheck

 import { navOptions } from  './nav.svelte';	
let selected = navOptions[0];	
let intSelected = 0;	
function changeComponent(event) {
	selected = navOptions[event.srcElement.id];
	intSelected = event.srcElement.id;
}


  function goTop() {
    document.body.scrollIntoView();
  }
</script>
  
<nav>
        <div class="nav_nav">
                <img src="/logo.png" class="imgnavigation" alt="logo">

        </div>
        <div class="nav_text">
            <ul>
            {#each navOptions as option, i}
		<li class="nav-item">
			<!-- svelte-ignore a11y_interactive_supports_focus -->
			<a class={intSelected==i ? "nav-link active p-2 ml-1" : "p-2 ml-1 nav-link"} on:click={goTop} on:click={changeComponent} id={i} role="tab">{option.page}</a>
		</li>
		{/each}
            </ul>
        </div>
    </nav>

<main>
<svelte:component this={selected.component}/>
</main>

<footer>
        <div class="footer__pic">
                <img src="/logo.png" class="imgfooter" alt="logo">
        </div>
        <div class="footer__nav">
            <h3 class="footer-titel">Links</h3>
            <div class="footer-nav"><ul>
            {#each navOptions as option, i}
		<li class="footer-item">
			<a class= "p-2 ml-1 footer-link" on:click={goTop} on:click={changeComponent} id={i} role="tab">{option.page}</a>
		</li>
		{/each}
            </ul></div>
        </div>
        <div class="footer__socials">
            <h3 class="footer-titel">Socials</h3>
            <div class="footer__social">
                <a href="https://www.facebook.com/yuyo.sarlet/" target="_blank">
                    <img src="/Facebook.svg" class="socials-icon" alt="socials">
                </a>
                <a href="https://www.instagram.com/yukiyosarlet/" target="_blank">
                    <img src="/Instagram.svg" class="socials-icon" alt="socials">
                </a>
                <a href="https://github.com/yukiyosarlet" target="_blank">
                    <img src="/github.svg" class="socials-icon" alt="socials">
                </a>
                <a href="https://www.linkedin.com/in/yukiyo-sarlet-483477311/" target="_blank">
                    <img src="/LinkdIn.svg" class="socials-icon" alt="socials">
                </a>
            </div>
        </div>
    </footer>


<style lang="scss">
    main{
    position: relative;
	padding: 1rem;
	overflow: hidden;
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
	grid-template-columns: 1fr 3fr 1fr;
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

.active{
border-bottom: solid green 2px;
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
		cursor: pointer;

		
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
		
		cursor: pointer;
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
