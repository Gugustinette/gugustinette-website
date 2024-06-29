<template>
    <main class="article-content">
        <ContentDoc />
    </main>
</template>

<style lang="scss">
main.article-content {
    height: 100%;
    width: 100%;
    display: grid;
    place-items: center;
    padding: 8em 0em;
    overflow: hidden;

    h1 {
        color: var(--color-font);
        padding: 0 !important;
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
        padding: 2em;
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: 1em;
        width: 100%;

        li {
            color: var(--color-font-grey);
        }
    }

    img {
        max-height: 300px;
        padding: 2em;
    }

    p:has(> img) {
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>