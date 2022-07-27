new Vue({
    el: '#tasklist',
    data: {
        title: 'to do list',
        tasks: [
            { name: 'Сделать ту ду лист на Вью' },
            { name: 'Выучить верстку' },
            { name: 'Устроиться вью девелопером на 300к+' },
        ]
    },
    methods: {
        newItem: function () {
            if (!this.tasks.name) {
                return
            }
            this.tasks.push ({
                name: this.tasks.name,
                del: '' 
            });
            this.tasks.name = ""; 
        },

        delItem: function (task) {
            this.tasks.splice(this.tasks.indexOf(task), 1)
        }
    }
})