<script context="module">
// @ts-nocheck

// main navigation for the application
import Home from './home.svelte';
import Info from './info.svelte';
import Ervaring from './ervaring.svelte';


// these are our 'pages' to navigate through (in order for this export to work the script tag MUST include context="module")
export const navOptions = [
		
    { page: 'Home', component: Home },    
    { page: 'Info', component: Info },
    { page: 'Ervaring', component: Ervaring },
		// other navigation pages can go here
];
</script>