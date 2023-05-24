



const app={


    data(){
        return{
            currentPage:"home",
            links:[
                {id:0,img:'phone.png',name:"Мобильные"},
                {id:1,img:'power-bank.png',name:"Powerbank"},
                {id:2,img:'phone case.png',name:"Phone case"},
                {id:3,img:'gpu-icon.png',name:"Видеокарты"},
                {id:4,img:'cpu.png',name:"Процессоры"},
                {id:5,img:'bike.png',name:"Велосипеды"},
            ],
            popular:[
                {id:1,img:'Airpods.png',name:"Apple AirPods 2 with Charging Case"},
                {id:2,img:'bicycle.png',name:"Велосипед AltairAL 27.5 V FR"},
                {id:3,img:'GPU.png',name:"MSI GeForce GTX 1660 SUPER Gaming"},
                {id:4,img:'GPU.png',name:"MSI GeForce GTX 1660 SUPER Gaming"}
            ],
            images:[
                "\thttps://live.staticflickr.com/65535/52913385847_be5c9a2ff2_n.jpg",
                "https://live.staticflickr.com/65535/52914119429_aa0f605fdd_c.jpg",
                "\thttps://live.staticflickr.com/65535/52913385972_599b3c0dfe_b.jpg",

            ],
            info:[
                {title:"MSI GeForce GTX 1660 SUPER Gaming 6gb"},
                {title:"iPhone 14 Теперь Розовый Встроенная память 8/126 ГБЗаряд батареи 3095 мА·ч Основная камера (Мп)12 + 12"},
                {title:"MSI GeForce GTX 1660 SUPER Gaming 6gb"},
            ],
            powerbanks:[
                {id:1,img:'powerbank.png',name:"MSI GeForce GTX 1660 SUPER Gaming", price:20000 ,views:31,category:"powerbank"},
                {id:2,img:'powerbank.png',name:"MSI GeForce GTX ", price:30000 ,views:11,category:"powerbank"},

            ],
            phones:[
                {id:1,img:'iphone13.png',name:"iphone13",price:50000 ,views:21 ,category:"phone"},
                {id:2,img:'Pocox5pro.png',name:"Велосипед AltairAL 27.5 V FR", price:6000,views:211,category:"phone"},
            ],
            phonecase:[
                {id:1,img:'phonecase.png',name:"Велосипед AltairAL 27.5 V FR", views:111,price:1000,category:"phonecase"},
                {id:2,img:'phonecase2.png',name:"Велосипед AltairAL 27.5 V FR",views:11,price:5000,category:"phonecase"}
            ],
            gpu:[
                {id:1,img:'GPU.png',name:"Велосипед AltairAL 27.5 V FR", views:111,price:1000,category:"gpu"},
                {id:2,img:'gpuamd.png',name:"Велосипед AltairAL 27.5 V FR",views:11,price:5000,category:"gpu"}
            ],
            cpu:[
                {id:1,img:'cpu.png',name:"Велосипед AltairAL 27.5 V FR", views:111,price:1000,category:"cpu"},
                {id:2,img:'cpui7.png',name:"Велосипед AltairAL 27.5 V FR",views:11,price:5000,category:"cpu"}
            ],
            bikes:[
                {id:1,img:'bicycle.png',name:"Велосипед AltairAL 27.5 V FR", views:111,price:1000,category:   "bikes"},
                {id:2,img:'bicycle2.png',name:"Велосипед AltairAL 27.5 V FR",views:11,price:5000,category:"bikes"}
            ],
            description:" Горный велосипед Trinx M116 Pro (2021)<br> Рама:Alum 6061 Special-shaped Цепь:KMC 7S",
            currentImageIndex: 2,
            isVisible:false,
            isVisiblee:false,
            isVisibleee:false,
            handlers: [
                () => this.currentPage="phone",
                () => this.currentPage="powerbanks",
                () =>this.currentPage="phonecase",
                () =>this.currentPage="gpu",
                () =>this.currentPage="cpu",
                () =>this.currentPage="bikes",

            ],

            filter: {
                sort: 'popular'
            },

        };


    },

     computed: {
        currentImage() {
            return this.images[this.currentImageIndex];
        },
         filteredpowerbanks(){
             let filteredpowerbanks=this.powerbanks
             const sort=this.filter.sort
             if (sort === 'price') {
                 filteredpowerbanks.sort((a, b) => a.price - b.price)
             }
             if (sort === 'popular') {
                 filteredpowerbanks.sort((a, b) => a.views - b.views)
             }
             return filteredpowerbanks
         },
         filteredphones(){
             let filteredphones=this.phones
             const sort=this.filter.sort
             if (sort === 'price') {
                 filteredphones.sort((a, b) => a.price - b.price)
             }
             if (sort === 'popular') {
                 filteredphones.sort((a, b) => a.views - b.views)
             }
             return filteredphones
         },
         filteredphonecase(){
             let filteredphonecase=this.phonecase
             const sort=this.filter.sort
             if (sort === 'price') {
                 filteredphonecase.sort((a, b) => a.price - b.price)
             }
             if (sort === 'popular') {
                 filteredphonecase.sort((a, b) => a.views - b.views)
             }
             return filteredphonecase
         },
         filteredgpu(){
             let filteredgpu=this.gpu
             const sort=this.filter.sort
             if (sort === 'price') {
                 filteredgpu.sort((a, b) => a.price - b.price)
             }
             if (sort === 'popular') {
                 filteredgpu.sort((a, b) => a.views - b.views)
             }
             return filteredgpu
         },
         filteredcpu(){
             let filteredcpu=this.cpu
             const sort=this.filter.sort
             if (sort === 'price') {
                 filteredcpu.sort((a, b) => a.price - b.price)
             }
             if (sort === 'popular') {
                 filteredcpu.sort((a, b) => a.views - b.views)
             }
             return filteredcpu
         },
         filteredbikes(){
             let filteredbikes=this.bikes
             const sort=this.filter.sort
             if (sort === 'price') {
                 filteredbikes.sort((a, b) => a.price - b.price)
             }
             if (sort === 'popular') {
                 filteredbikes.sort((a, b) => a.views - b.views)
             }
             return filteredbikes
         },





    },
    methods: {
        showElement(a) {

            this.isVisible = true;
        },
        hideElement(a) {
            this.isVisible = false;
        },
        showElements(b) {

            this.isVisiblee = true;
        },
        hideElements(b) {
            this.isVisiblee = false;
        },
        showElementss(c) {

            this.isVisibleee = true;
        },
        hideElementss(c) {
            this.isVisibleee = false;
        },
        previousImage() {
            this.currentImageIndex =
                (this.currentImageIndex + this.images.length - 1) % this.images.length;
        },
        nextImage() {
            this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
        },
        goToSlide(index) {
            this.currentImageIndex = index;
        },

    },

}




Vue.createApp(app).mount('#app')
