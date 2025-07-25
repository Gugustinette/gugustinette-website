<template>
    <main class="article-content">
        <ContentRenderer v-if="markdown" :value="markdown" />
    </main>
</template>

<script setup lang="ts">
import { ContentRenderer } from '#components';

definePageMeta({ documentDriven: { page: false } });
const router = useRouter();
const route = useRoute()
// Find article by slug
// @ts-ignore
const article = useArticles().find((article) => article.slug === route.params.slug[0]);
// Get data from the content collection
const { data: markdown } = await useAsyncData(route.path, () => {
  return queryCollection('content').path(route.path).first()
})

onMounted(() => {
    if (!article) {
        router.push('/blog');
        return;
    }
    // Insert the date of the article into the document, after the title
    const date = document.createElement('p');
    date.textContent = article.date.toLocaleDateString();
    date.classList.add('article-date');
    document.querySelector('h1')?.insertAdjacentElement('afterend', date);
});

/**
 * Select images from the content and display them in fullscreen when clicked
 */
const openImage = (src: string) => {
    const image = document.createElement('img');
    image.id = 'blog-fullscreen-image';
    image.classList.add('blog-fullscreen-image');
    image.onclick = () => document.body.removeChild(image);
    image.src = src;
    document.body.appendChild(image);
};

const handleImageClick = (event: MouseEvent) => {
    const target = event.target as HTMLImageElement;
    if (target.tagName === 'IMG' && target.id !== 'blog-fullscreen-image') {
        openImage(target.src);
    }
};

const handleKeydown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
        const image = document.querySelector('#blog-fullscreen-image');
        if (image) {
            document.body.removeChild(image);
        }
    }
};

onMounted(() => {
    document.addEventListener('click', handleImageClick);
    document.addEventListener('keydown', handleKeydown);
});
</script>

<style lang="scss">
main.article-content {
    height: 100%;
    width: 100%;
    display: grid;
    place-items: center;
    padding: 8em 0em;
    overflow: hidden;

    .article-date {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        color: var(--color-font-grey-dark);
        padding-top: 0;
    }

    h1 {
        max-width: 90vw;
        color: var(--color-font);
        padding: 0 !important;
    }

    h2 {
        max-width: 90vw;
        padding-top: 1em;
    }

    h3 {
        max-width: 90vw;
        padding-top: 1.2em;
    }

    * {
        color: var(--color-font-grey);
        span {
            color: var(--color-primary-pink);
        }
    }

    > * {
        width: 80%;
        max-width: 800px;
    }

    ul {
        padding: 0.9em 2em;
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: 1em;
        width: 100%;
        max-width: 80vw;

        li {
            font-size: 1.2em;
            color: var(--color-font-grey);
        }

        a {
            color: var(--color-primary-pink);
            text-decoration: none;
            font-weight: bold;
        }
    }

    img {
        max-height: 300px;
        padding: 2em;
        cursor: zoom-in;
    }

    p {
        font-size: 1.2em;
        padding: 0.9em 0;
        max-width: 80vw;
        a {
            color: var(--color-primary-pink);
            text-decoration: none;
            font-weight: bold;
        }
    }

    p:has(> img) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        justify-content: center;
        align-items: center;
    }

    hr {
        margin: 2em 0;
        border: 1px solid var(--color-font-grey);
        width: 100%;
    }

    iframe {
        padding: 1em 0;
    }

    pre {
        padding: 1em;
        background-color: rgba(255, 255, 255, 0.05);
        color: var(--color-font);
        border-radius: 0.5em;
        overflow-x: auto;
    }

    @media (prefers-color-scheme: light) {
        * {
            color: var(--color-font);
        }

        ul {
            li {
                color: var(--color-font);
            }
        }
    }

    @media screen and (max-width: 768px) {
        * {
            max-width: 90vw;
            width: 90%;
        }

        p:has(> img) {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            img {
                max-width: 90vw;
                padding: 1em;
            }
        }
    }
}

img.blog-fullscreen-image {
    object-fit: contain;
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 1000;
    background-color: rgba(0, 0, 0, 0.8);
    opacity: 1;
    transition: opacity 0.3s;
    cursor: pointer;
}
</style>
