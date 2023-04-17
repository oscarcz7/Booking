<template>
    <div>
        <label>Entry Date</label>
        <input type="date" v-model.trim="props.entryDate" />
    </div>
    <div>
        <label>Departure Date</label>
        <input type="date" v-model.trim="props.departureDate" />
    </div>
    <div>
        <label>Customer Type</label>
        <select name="Customer Type" id="customer" v-model="props.customerType">
            <option value="rw">Reward Customer</option>
            <option value="rc">Regular Customer</option>
        </select>
    </div>
    <button type="submit" :disabled="block">Search</button>
</template>

<script>
export default {
    props: {
        entryDate: String,
        departureDate: String,
        customerType: String,
    },
    computed: {
        block() {
            return props.entryDate.trim() === "" || props.departureDate.trim() === "" || props.customerType.trim() === "" ? true : false;
        },
    },
};
</script>

<style lang="scss" scoped>
$color_1: #1DA1F2;
$color_2: gray;
$color_3: white;
$color_4: black;
$font-family_1: poppins;

input,
select {

    display: block;
    width: 50%;
    padding: 10px;
    border: none;
    outline: none;
    box-sizing: border-box;
    background: #ecf0f3;
    padding: 10px;
    padding-left: 20px;
    height: 50px;
    font-size: 14px;
    border-radius: 50px;
    box-shadow: inset 6px 6px 6px #cbced1, inset -6px -6px 6px white;
    margin: 0 30px 10px 0;

    &::placeholder {
        color: $color_2;
    }

    @media screen and (min-width: 992px) and (max-width: 1439px) {
        min-width: 50% !important;

    }

    @media screen and (max-width: 991px) {
        min-width: 90% !important;

    }
}

form {
    margin-top: 30px;
}

label {
    display: block;
    width: 100%;
    padding: 0;
    border: none;
    outline: none;
    box-sizing: border-box;
    margin-bottom: 4px;
    font-weight: 900;
    font-size: 1.2rem;

    &:nth-of-type(2) {
        margin-top: 12px;
    }
}

button {
    background-color: orange;
    color: $color_3;

    display: block;
    width: 200px;
    padding: 0;
    border: none;
    outline: none;
    box-sizing: border-box;
    margin-top: 25px;
    height: 40px;
    border-radius: 20px;
    cursor: pointer;
    font-weight: 900;
    font-size: 1rem;
    transition: 0.5s;


    &:hover {
        scale: 1.1;
        color: orange;
        background-color: #fff;
    }
}
</style>