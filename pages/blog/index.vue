<template>
    <main>
        <h1>Welcome to my <span>Blog</span></h1>
        <div class="articles">
            <NuxtLink to="/blog/articles/test-article">Test Article</NuxtLink>
        </div>
    </main>
</template>

<style lang="scss">
main {
    height: 100%;
    width: 100%;
    display: grid;
    place-items: center;
    padding: 8em 0;

    h1 {
        margin-bottom: 0.4em;
        color: var(--color-font);

        span {
            color: var(--color-primary-pink);
        }
    }

    .articles {
        width: 100%;
        max-width: 80%;
        display: flex;
        flex-direction: column;
        gap: 1em;

        a {
            position: relative;
            padding: 1em;
            margin-left: 5em;
            border-radius: 0.5em;
            text-decoration: none;
            transition: all 0.2s ease;

            &:hover {
                background-color: var(--color-primary-pink-dark);
            }

            &::before {
                content: '';
                position: absolute;
                top: 50%;
                left: -300px;
                width: 300px;
                height: 3px;
                background: #3B353E;
                transform: translateY(-50%);
                border-radius: 100%;
                filter: blur(1px);
            }

            &::after {
                content: '';
                position: absolute;
                top: 50%;
                left: -300px;
                width: 0;
                height: 3px;
                background: linear-gradient(96.4deg, var(--color-primary-pink) -12.6%, var(--color-primary-blue) 87.1%);
                transition: all 0.2s ease;
                transform: translateY(-50%);
                border-radius: 100%;
                filter: blur(1px);
            }

            &:hover {
                &::after {
                    width: 300px;
                }
            }
        }
    }
}
</style>
