<template>
    <header>
        <div class="navbar">
            <div class="logo">Booking.oecz</div>
            <ul class="links">
                <RouterLink class="action_btn" to="/">Home</RouterLink>
            </ul>

            <div class="toggle_btn">
                <font-awesome-icon :icon="['fas', 'bars']" />
            </div>

        </div>
    </header>
</template>

<script>
import { RouterLink } from 'vue-router'
export default {

}
</script>

<style scoped>
li {
    list-style: none;
}

a {
    text-decoration: none;
    color: #fff;
    font-size: 1rem;
}

a:hover {
    color: aquamarine;
}

header {
    position: relative;
    padding: 0 2rem;
}

.navbar {
    width: 100%;
    height: 60px;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.navbar .logo {
    font-size: 1.5rem;
    font-weight: bold;
}

.navbar .links {
    display: flex;
    gap: 2rem;
}

.navbar .toggle_btn {
    color: #fff;
    font-size: 1.5rem;
    cursor: pointer;
    display: none;
}

.action_btn {
    background-color: orange;
    color: #fff;
    padding: 0.5rem 1rem;
    border: none;
    outline: none;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: bold;
    cursor: pointer;
}

.action_btn:hover {
    scale: 2;
    color: orange;
    background-color: #fff;
}
</style>