import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    integrations: [starlight({
        title: 'Easyastroc',
        social: {
            github: 'https://github.com/withastro/starlight',
        },
        sidebar: [
            {
                label: 'Instalacion',
                items: [
                    // Each item here is one entry in the navigation menu.
                    { label: 'Instalacion', slug: 'instalacion/instalacion' }, 
                ],
            },
            {
                label: 'Componentes',
                autogenerate: { directory: 'componentes' },
            },
        ],
		}), tailwind()],
});