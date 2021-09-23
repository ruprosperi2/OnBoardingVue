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
    },
    methods:{
        changeMessage(){
            this.message = "Hola humanos"
            this.capitalize()
        },
        capitalize(){
            this.message = this.message.toUpperCase()
        },
        power(){
            this.numbers = this.numbers * this.numbers
        }
    }
})

app.mount('#myApp')