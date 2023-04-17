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
            <div class="dates">
                <p><span class="labels">Entry Date:</span> {{ entryDate }}</p>
                <p><span class="labels">Departure Date:</span> {{ departureDate }}</p>
            </div>
            <div>
                <p><span class="labels">Price:</span> <span class="price">${{ price }}</span></p>
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
    price: Number
})
</script>

<style scoped lang="scss">
.card {
    max-width: 350px;
    border: 0;
    width: 100%;
    margin-inline: auto;
}

.container-card {
    position: relative;
    border: 2px solid transparent;
    background: linear-gradient(71deg, #102f48, #080509, #102f48);
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

.dates {
    display: flex;
    flex-wrap: wrap;
}

.labels {
    color: #3da077;
    font-weight: 500;
    font-size: 1rem;
}
.price{
    color: #535323;
    font-weight: 700;
    font-size: 1.4rem;
}

.dates p {
    margin-right: 5px;
}
</style>