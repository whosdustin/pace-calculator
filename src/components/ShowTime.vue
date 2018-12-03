<template>
  <section>
    <h2 class='digit'>
      <span class="hours" v-if="hours > 0" v-text="hours" />
      <span class="minutes" v-if="minutes > 0 || hours > 0" v-text="minutes" />
      <span class="seconds" v-text="(seconds > 0 || minutes > 0 || hours > 0) ? seconds : '--'"/>
    </h2>
    <h3 class="title">{{ title }}</h3>
  </section>
</template>

<script>
export default {
  name: 'ShowTime',
  props: {
    title: {
      type: String
    },
    time: {
      type: Object
    }
  },
  data () {
    return {
      hours: null,
      minutes: null,
      seconds: null
    }
  }
}
</script>
