<template>
  <h2>{{customTitle}}:</h2>
  <p>{{ counter }} <sup>2</sup>={{ power }}</p>
  <div>
    <button @click="increase">+1</button>
    <button @click="decrease">-1</button>
  </div>
</template>

<script>
export default {
  name: "Patito",
  props:{
    title: String,
    start:{
      type: Number
    }
  },
  data() {
    return {
      counter: 5
    }
  },
  computed: {
    power() {
      return this.counter * this.counter
    },
    customTitle(){
      return this.title ? this.title :'Counter'
    }
  }, methods:{
    increase(){
      this.counter++
    },
    decrease(){
      this.counter--
    }
  }
}
</script>

<style scoped>
button {
  background-color: #64b6b7;
  border-radius: 5px;
  border: 1px solid white;
  color: white;
  cursor: pointer;
  margin: 0 5px;
  padding: 5px 15px;
  transition: 0.3s ease-in-out;
}

button:hover{
  background-color: #5aa67b;
  transition: 0.3s ease-in-out;
}

</style>