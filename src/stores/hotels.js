import { collection, getDocs, query, where } from 'firebase/firestore/lite'
import { defineStore } from 'pinia'
import { db } from '../firebaseConfig'

export const useDatabaseStore = defineStore('database', {
  state: () => ({
    documents: [],
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
      // const q = query(collection(db, 'hotels'), where('user', '==', auth.currentUser.uid))
      try {
        const querySnapshot = await getDocs(q)
        
        querySnapshot.forEach((doc) => {
          this.documents.push({
            id: doc.id,
            ...doc.data()
          })
        })
      } catch (error) {
        console.log(error)
      } finally {
        this.loading = false
      }
    }
  }
})
