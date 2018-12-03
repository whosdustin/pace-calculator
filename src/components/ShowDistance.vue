<template>
  <section>
    <h2 class="distance" v-text="distance" />
    <span class="unit" v-text="currentUnit"/>
    <select v-model='newUnit'
      @change="convertDistance">
      <option 
        v-for="unit in units" 
        :value="unit.value"
        :selected="unit.value === currentUnit"
        :key="unit.value">
        {{ unit.name }}</option>
    </select>
  </section>
</template>

<script>
export default {
  name: 'ShowDistance',
  data () {
    return {
      distance: 0,
      currentUnit: 'mi',
      newUnit: null,
      units: [
        { name: 'miles', value: 'mi', toK: 0.62137 },
        { name: 'kilometers', value: 'k' },
        { name: 'meters', value: 'm', toK: 1000 },
        { name: 'yards', value: 'yds', toK: 1093.6 }
      ]
    }
  },
  methods: {
    convertDistance(event) {
      let result
      let distance = this.distance
      let unitFromK = this.units.find(u => u.value === event.target.value).toK || 1
      let unitToK = this.units.find(u => u.value === this.currentUnit).toK || 1
      let convertToK = (dist, val) => dist / val
      let convertFromK = (dist, val) => dist * val

      if (event.target.value === 'k') {
        result = convertToK(distance, unitToK)
        this.distance = result.toFixed(1)
        this.currentUnit = event.target.value
        return
      }

      if (this.currentUnit === 'k') {
        result = convertFromK(distance, unitFromK)
        this.distance = result.toFixed(1)
        this.currentUnit = event.target.value
        return
      }

      // Convert to k then from k to new unit
      result = convertFromK(convertToK(distance, unitToK), unitFromK)
      this.distance = result.toFixed(1)
      this.currentUnit = event.target.value
    }
  }
}
</script>

<style>

</style>
