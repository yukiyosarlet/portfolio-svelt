import svelteLogo from '../assets/logo.png';

export const navbarData = {
    logo: true,
    logoSrc: svelteLogo,
    linkUrl: '#/',
    optionalLinkText: 'svelte',
    altText: 'Logo',
    links:[
        {url:"#/",
        displayInNav: true,
        displayInFooter: true,
        linkText: 'Home'
        },
        {url:"/ervaring",
        displayInNav: true,
        displayInFooter: true,
        linkText: 'Ervaring'
        },
        {url:"/info",
        displayInNav: true,
        displayInFooter: true,
        linkText: 'Info'
        },
          {url:"/info",
        displayInNav: false,
        displayInFooter: false,
        linkText: ''
        }
    ]

}