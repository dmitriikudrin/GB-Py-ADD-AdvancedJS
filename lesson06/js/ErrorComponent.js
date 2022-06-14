Vue.component('error-block', {
    props: ['error_urls'],
    data() {
        return {
            error_msg: this.getErrorUrls(),
        }
    },
    methods: {
        getErrorUrls() {
            this.error_urls.forEach(el=> console.log(el))
            console.log(this.error_urls);
            return this.error_urls.type
        }
    },
    template: `<div>{{error_msg}}</div>`
    // template: `<div>
    //                 {{ error_urls.forEach( el=> <p>Ошибка доступа к ресурсу {{ url }}</p>}}
    //            </div>`
})