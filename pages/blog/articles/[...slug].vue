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

    h2 {
        padding-top: 1em;
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
            font-size: 1.2em;
            color: var(--color-font-grey);
        }
    }

    img {
        max-height: 300px;
        padding: 2em;
    }

    p {
        font-size: 1.2em;
        padding: 1em 0;
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
}
</style>