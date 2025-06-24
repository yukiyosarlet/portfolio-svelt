<script>

export let data;
let windowWidth = window.innerWidth;
let clicked = false;

function handleResize(){
    windowWidth = window.innerWidth;
    if (windowWidth >= 1024) clicked = false
}

const handleClick =() => {
    clicked = !clicked;
}

const resetClick = () =>{
    clicked = false;
}
</script>

<svelte:window on:resize={handleResize}/>
<nav class={clicked? 'navbar-clicked' : 'navbar'}>
<div class="menu-icon">

    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="icon-wrapper" on:click={handleClick} on:keypress={handleClick} >
        <i class={clicked? "fa fa-times" : "fa fa-bars"}> </i>
    </div>
    {#if data.logoLink}
    <a class ="logo-link-text" href={data.linkURL}><img class="logo" src={data.logoSrc} alt={data.altText}/>{data.optionLinkText? data.optionalLinktext : ''}</a>
    {:else}
    <img class="logo" src={data.logoSrc} alt={data.altText}/>
    {/if}
</div>

<div class="navbar-links">
{#each data.links as link}
    {#if link.displayInNav}
        <!-- svelte-ignore a11y_interactive_supports_focus -->
        <div class={clicked? 'navbar-item-clicked' : 'navbar-item'} on:click={resetClick} role="link" on:keypress={resetClick}>
            <a class="link-text" href={link.url}> {link.linkText}  </a> 
        </div>
        
    {/if}
{/each}
</div>
</nav>

<style lang="scss">
    .navbar {
        display: grid;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        grid-template-columns: 1fr 4fr ;
   &-item {
	display: grid;
	align-items: center;
	justify-items: center;

	.link-text {
		color: green;
		text-decoration: none;
		font-size: 1.5rem;
	}	
}
.navbar-links{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        
    }
 .logo {
	height: 5rem;
	padding: 1rem;
} 
.logo-link-text {
		height: 100%;
		display: grid;
		align-items: center;
	}
}





</style>