// console.log('hello wordl');

const APP = new Vue({
    el: '#panel', // el componente html para manipular
    data: { // campo para definir las propiedades
        header: 'Este es el título de mi div',
        users: [
            { name: 'William', sex: 'M', years: 25 },
            { name: 'Isis', sex: 'F', years: 25 },
            { name: 'Rubén', sex: 'M', years: 25 },
            { name: 'Erick', sex: 'M', years: 25 },
            { name: 'José', sex: 'M', years: 25 },
            {name: 'Angel', sex: 'M', years: 25 }
        ],
        nameUser: 'golbet',
        sexUser: 'M',
        yearsAvg: 0 
    },
    methods: { // definiendo los métidos para ser ejecutados mendiante v-on:evento o @evento
        addDeveloper() {
            this.users.push({
                name: this.nameUser,
                sex: this.sexUser,
                years: 25
            });
        }
    },

    computed: {
        avgEdad () {
            this.yearsAvg = 0;
            let sumYears = 0;

            for (user of this.users) {
                sumYears = sumYears + user.years;
            }

            this.yearsAvg = Math.floor(sumYears / this.users.length);
            return this.yearsAvg;

        }
    }
});