<template>
  <section>
    <h2 class="distance" v-text="distance" />
    <span class="unit" v-text="currentUnit"/>
    <select v-model='newUnit'
      @change="calculateDistance">
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
    findConversionValue(unit) {
      return this.units.find(u => u.value === unit).toK || 1
    },
    convertToK(distance) {
      return distance / this.findConversionValue(this.currentUnit)
    },
    convertFromK(distance) {
      return distance * this.findConversionValue(this.newUnit)
    },
    calculateDistance() {
      let result
      let distance = this.distance

      if (this.newUnit === 'k') {
        result = this.convertToK(distance)
      } else if (this.currentUnit === 'k') {
        result = this.convertFromK(distance)
      } else {
        // Convert to k then from k to new unit
        result = this.convertFromK(this.convertToK(distance))
      }
    
      // RegEx to remove decimal if is a 0 
      this.distance = result.toFixed(1).replace(/[.,]0$/, '')
      this.currentUnit = this.newUnit
    }
  }
}
</script>

<style>

</style>
