<template>
    <div>
        <RouterLink to="/" class="button">
            <span class="material-icons">search</span>
            <span class="text">Search options!</span>
        </RouterLink>
    </div>
</template>


<style lang="scss" scoped>
.button {
    background-color: orange;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 5vh;
    border: none;
    outline: none;
    border-radius: 20px;
    cursor: pointer;
    font-weight: 900;
    font-size: 1rem;
    transition: 0.5s;
    margin-top: 40px;
    margin-bottom: 40px;
    width: fit-content !important;
    margin: 0 auto;
    padding: 0.5rem 2rem;

    &:hover {
        scale: 1.1;
        color: orange;
        background-color: #fff;
    }
}

.material-icons {
    font-size: 2rem;
    color: var(--light);
    transition: 0.2s ease-in-out;
}
</style>