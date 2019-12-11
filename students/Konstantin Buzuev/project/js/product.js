Vue.component("product", {
    props: {
        product: {
            id: Number,
            title: String,
            color: String,
            description: String,
            price: Number,
            characteristics: {
                "OS": String,
                "display": Number,
                "processor": String,
                "RAM": Number,
                "Video": String,
                "HDD": Number,
                "SSD": Number
            },
            imageURL: String,
            fullImageURL: String,
            summary: String,
            details: String,
            visible: Boolean
        }
    },
    template: `<div class='product'>\
                    <h1 class='product__title'>{{ product.characteristics.display }}" {{ product.title }}</h1>\
                    <a :href='product.fullImageURL' class='product__link' target='_blank'>\
                        <img :src='product.imageURL' :alt='product.id' class='product__image'></a>\
                    <p class='product__price'>{{ product.price}} руб.</p>\
                    <button class='product__buy-btn' v-on:click="AddItem">Купить</button>\
                </div>`,
    methods: {
        AddItem: function () {
            eventBus.$emit("add-item-to-cart", this.product)
        }
    }
})