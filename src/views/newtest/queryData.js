import { getData, getColumns } from '@/api/mtable'
export default {
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      getData().then(response => {
        this.data = response.data.items
      })
      getColumns().then(response => {
        this.columns = response.data.items
      })
    }
  }
}
