
<script setup>
import HotelCard from '../components/HotelCard.vue';
import Button from '../components/Button.vue';
import { useDatabaseStore } from '../stores/hotels'
const databasesStore = useDatabaseStore()
databasesStore.getHotels()
</script>

<template>
    <main>
        <div class="container">
            <p class="container-title">Luxury Miami Hotels!</p>
            <Button />
            <div class="gradient-cards">
                <ul v-for="item of databasesStore.documents" :key="item.id">
                    <HotelCard :name="item.name" :rate="item.rate" />
                </ul>
            </div>
        </div>
    </main>
</template>

<style scoped lang="scss">
.container-title {
    text-align: center;
    padding: 0 !important;
    margin-bottom: 40px;
    font-size: 40px;
    color: #fff;
    font-weight: 600;
    line-height: 60px;
}

.container {
    width: 1200px !important;
    padding: 0 !important;
    margin-right: auto;
    margin-left: auto;

    @media screen and (min-width: 992px) and (max-width: 2080px) {
        max-width: 1279px !important;
        padding: 0 !important;
        margin: 0 70px !important;
        width: auto !important;
    }

    @media screen and (max-width: 991px) {
        max-width: 959px !important;
        margin: 0px !important;
        padding: 0 !important;
        width: auto !important;
    }
}

.gradient-cards {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    padding: 25px;

    @media screen and (max-width: 991px) {
        grid-template-columns: 1fr;
    }
}
</style>
