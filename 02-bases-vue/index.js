const app = Vue.createApp({
    data(){
        return{
            message: 'Hello World',
            numbers: 1+1,
            contact: '1'+'1',
            isBolean: true,
            isObject: {
                name: 'Ruben',
                age: 25
            },
            isArrays: [1,2,3]
        }
    }
})

app.mount('#myApp')

// <h1>Hello World</h1>
// <h2>String: {{"Hello World"}}</h2>
// <h2>Number: {{1+1}}</h2>
// <h2>Concat: {{"1"+"1"}}</h2>
// <h2>Boolean: {{true}}</h2>
// <h2>Object: {{ {name: "ruben", age:25 } }}</h2>
// <h2>Array: {{ [1,2,3,4] }}</h2>