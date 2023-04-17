import { collection, getDocs, query, where } from 'firebase/firestore/lite'
import { defineStore } from 'pinia'
import { db } from '../firebaseConfig'

export const useDatabaseStore = defineStore('database', {
  state: () => ({
    documents: [],
    totals: [],
    loading: false,
    loadingDoc: false
  }),
  actions: {
    async getHotels() {
      if (this.documents.length !== 0) {
        return
      }
      this.loading = true
      this.documents = []
      const q = query(collection(db, 'hotels'))
      try {
        const querySnapshot = await getDocs(q)
        querySnapshot.forEach((doc) => {
          this.documents.push({
            id: doc.id,
            ...doc.data()
          })
        })
      } catch (error) {
      } finally {
        this.loading = false
      }
    },

    async bestPrice(weekDays, weekendDays, customer) {
      if (this.totals.length !== 0) {
        return
      }
      this.loading = true
      this.totals = []
      let obj = {}
      let arr = []
      let hotels = []
      const q = query(collection(db, 'hotels'))
      try {
        const querySnapshot = await getDocs(q)
        querySnapshot.forEach((doc) => {
          arr.push({
            id: doc.id,
            ...doc.data()
          })
        })
        if (customer === 'rc') {
          arr.map((t) => {
            obj = {
              name: t.name,
              price: t.rc_wPrice * weekDays + t.rc_wnPrice * weekendDays,
              rate: t.rate
            }
            hotels.push(obj)
          })
        } else {
          arr.map((t) => {
            obj = {
              name: t.name,
              price: t.rwc_wPrice * weekDays + t.rwc_wnPrice * weekendDays,
              rate: t.rate
            }
            hotels.push(obj)
          })
        }

        const hotel = hotels.filter((t) => t.price === Math.min(...hotels.map((reg) => reg.price)))
        if (hotel.length === 1) {
          this.totals = hotel
        } else {
          this.totals = hotel.filter((t) => t.rate === Math.max(...hotel.map((reg) => reg.rate)))
        }
      } catch (error) {
      } finally {
        this.loading = false
      }
    }
  }
})
