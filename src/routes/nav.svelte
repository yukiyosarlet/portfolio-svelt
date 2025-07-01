<script context="module">
// main navigation for the application
import Home from './home.svelte';
import Info from './info.svelte';
import Ervaring from './ervaring.svelte';

// these are our 'pages' to navigate through (in order for this export to work the script tag MUST include context="module")
export const navOptions = [
		
    { page: 'Home',   component: Home },
    { page: 'Ervaring',   component: Ervaring },
    { page: 'Info',   component: Info },
		// other navigation pages can go here
];
</script>