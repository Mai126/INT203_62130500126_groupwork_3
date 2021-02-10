    const app = {
        data() {
            return {
                dogs:[
                    {name:'Pembroke Welsh Corgi',description:'Among the most agreeable of all small housedogs, the Pembroke Welsh Corgi is a strong, athletic, and lively little herder who is affectionate and companionable without being needy. They are one of the worlds most popular herding breeds.' ,img:'./images/corgi.jpg',price:'30,000฿',like:false},
                    {name:'Shih Tzu',description:'The Shih Tzu is a strong little dog with a small muzzle and normally have large dark brown eyes. They have a soft and long double coat. Although sometimes long, a Shih Tzu will not always have extremely lengthy hair like the Pekingese.  ' ,img:'./images/shitzu.jpg',price:'4,000฿',like:false},
                    {name:'French Bulldog',description:'The French Bulldog is a breed of domestic dog, bred to be companion dogs. The breed is the result of a cross between Toy Bulldogs imported from England, and local ratters in Paris, France, in the 1800s. They are stocky, compact dogs with a friendly' ,img:'./images/bulldog.jpg',price:'25,000฿',like:false}
                ]
            }
            
        
    },
    methods:{
        toggleLike(index){
            this.dogs[index].like = !this.dogs[index].like
        }
        },
        computed:{
            countLiked(){
                return this.dogs.filter( m => m.like).length
            }
        }
    }
    var mountedApp = Vue.createApp(app).mount('#app')