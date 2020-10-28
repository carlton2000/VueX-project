import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        products:[
            {name:'Jeans', price:350},
            {name:'Jacket', price:465},
            {name:'Socks', price:67},
            {name:'T-shirt', price:85},
            {name:'Golfer', price:120},
            {name:'Gloves', price:150},
          ]
    },
    getters:{
        saleProducts: state =>{
        
                var saleProducts = state.products.map(product => {
                    return {
                        name: '**' + product.name + '**',
                        price: product.price / 2,
                    }
                });
                return saleProducts;
            
        }
    },
    mutations:{
        reducePrice:(state, payload) => {
            state.products.forEach(product=>{
                product.price -= payload;
            })
        }
    },
    actions:{
        reducePrice:(context, payload) => {
            setTimeout(function(){
                context.commit('reducePrice', payload)
            },2000)
        }
    }
})