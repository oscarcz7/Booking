<template>
    <div class="card">
        <div class="container-card bg-green-box">
            <span class="material-icons" id="icon-card">hotel</span>
            <p class="card-title">{{ name }}</p>
            <div class="card-rate">
                <div v-for="(item, index) in rate">
                    <span class="material-icons">star</span>
                </div>
            </div>
            <div>
                <p>Entry Date: {{ entryDate }}</p>
                <p>Departue Date: {{ departureDate }}</p>
            </div>
            <div>
                <p>Price: {{ price }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    name: String,
    rate: Number,
    entryDate: String,
    departureDate: String,
    price: String
})
</script>

<style scoped lang="scss">
.card {
    max-width: 450px;
    border: 0;
    width: 100%;
    margin-inline: auto;
}

.container-card {
    position: relative;
    border: 2px solid transparent;
    background: linear-gradient(71deg, #080509, #102f48, #080509);
    background-clip: padding-box;
    border-radius: 45px;
    padding: 40px;

    img {
        margin-bottom: 20px;
    }
}

.bg-green-box {
    position: relative;
}

.bg-green-box::after {
    position: absolute;
    top: -1px;
    bottom: -1px;
    left: -1px;
    right: -1px;
    content: "";
    z-index: -1;
    border-radius: 45px;
}

.bg-green-box::after {
    background: linear-gradient(71deg, #0d1212, #3da077, #0d1212);
}

.card-title {
    font-weight: 600;
    color: white;
    letter-spacing: -0.02em;
    line-height: 40px;
    font-style: normal;
    font-size: 28px;
    padding-bottom: 6px;
}

.card-rate {
    display: flex;
    flex-wrap: wrap;
}

#icon-card {
    font-size: 50px;
    color: #3da077;
}
</style>