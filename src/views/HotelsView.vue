<template>
  <main>
    <div class="container">
      <div class="booking-form">
        <h1 class="title">Please fill the blanks to search the best hotel for you!</h1>
        <form @submit.prevent="bookingHotels">
          <div>
            <label>Entry Date</label>
            <input type="date" v-model="entryDate" required />
          </div>
          <div>
            <label>Departure Date</label>
            <input type="date" v-model="departureDate" required />
          </div>
          <div>
            <label>Customer Type</label>
            <select name="Customer Type" id="customer" v-model="customerType" required>
              <option value="rwc">Reward Customer</option>
              <option value="rc">Regular Customer</option>
            </select>
          </div>
          <div class="btns">
            <button type="submit">Search</button>
            <button @click="() => resetSearch()">Clean Search</button>
          </div>
        </form>
      </div>
      <hr />
      <div v-if="this.result" class="booking-results">
        <h1 class="title">This is the best result!</h1>
        <ul v-for="item of totals" :key="item.id">
          <ResultCard :name="item.name" :rate="item.rate" :price="item.price" :entryDate="entryDate"
            :departureDate="departureDate" />
        </ul>
      </div>
    </div>
  </main>
</template>

<script>
import moment from 'moment'
import ResultCard from '../components/ResultCard.vue'
import { mapActions } from 'pinia'
import { useDatabaseStore } from '../stores/hotels'

export default {
  components: { ResultCard },
  data() {
    return {
      entryDate: '',
      departureDate: '',
      customerType: '',
      result: false
    }
  },

  methods: {
    ...mapActions(useDatabaseStore, ['bestPrice']),
    async bookingHotels() {
      const { entryDate, departureDate, customerType } = this

      let result = null
      if (entryDate.isNullOrEmpty() || departureDate.isNullOrEmpty || customerType.isNullOrEmpty){
        window.alert('Please fill all the information!')
      }
      if (moment(entryDate) > moment(departureDate)) {
        window.alert('Dates are not correct! Please try again')
      } else {
        result = countWeekdaysAndWeekends(moment(entryDate), moment(departureDate))
      }
      this.bestPrice(result.weekdays, result.weekends, customerType)
      this.result = true
    },
    resetSearch() {
      window.location.reload();
    }
  },

  computed: {
    totals() {
      return useDatabaseStore().totals
    }
  }
}
/**
 *
 * @param {*} entryDate
 * @param {*} departureDate
 * @return Number of weekDays and weekendsDays
 */
function countWeekdaysAndWeekends(entryDate, departureDate) {
  let weekdays = 0
  let weekends = 0
  let currentDate = moment(entryDate)
  if (currentDate === departureDate) {
    const dayOfWeek = currentDate.getDay()
    if (dayOfWeek === 0 || dayOfWeek === 6) {
      weekends++
    } else {
      weekdays++
    }
    currentDate = currentDate.add(1, 'day')
  } else {
    while (currentDate <= departureDate) {
      const dayOfWeek = currentDate.day()
      if (dayOfWeek === 0 || dayOfWeek === 6) {
        weekends++
      } else {
        weekdays++
      }
      currentDate = currentDate.add(1, 'day')
    }
  }
  return { weekdays, weekends }
}
</script>

<style lang="scss" scoped>
$color_1: #1da1f2;
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
  margin-top: 20px;
}

.btns {
  display: flex;
  flex-wrap: wrap;
}

.btns button {
  margin-right: 10px;
}

.container {
  // width: 1200px !important;
  padding: 0 !important;
  margin-right: auto;
  margin-left: auto;
  // height: 100vh;

  @media screen and (min-width: 992px) and (max-width: 2080px) {
    // max-width: 1279px !important;
    padding: 0 !important;
    margin: 0 70px !important;
    width: auto !important;
  }

  @media screen and (max-width: 991px) {
    // max-width: 959px !important;
    margin: 0px !important;
    padding: 0 !important;
    width: auto !important;
  }
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

.title {
  font-weight: 1000;
  font-size: 2rem;
}

.booking-form {
  margin-bottom: 25px;
}

.booking-results {
  margin-top: 25px;
}
</style>
