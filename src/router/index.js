import Vue from 'vue'
import Router from 'vue-router'

// components
import UserLogin from '../components/UserLogin'
import UserSignUp from '../components/UserSignUp'
import Save_Calorie from '../components/Save_Calorie';

Vue.use(Router)

export default new Router({

// const router = new Router({
    routes: [
        {
            path: '/login',
            name: 'login',
            component: UserLogin,
            meta: {
                isPublic: true
            }
        },
        {
            path: '/signup',
            name: 'signup',
            component: UserSignUp,
            meta: {
                isPublic: true
            }
        },
        {
            path: '/Save_Calorie',
            component: Save_Calorie,
        }
    ]
})

// router.beforeEach((to,from,next)=>{
//     if(to.matched.some(page => page.meta.isPublic) || Store.state.auth.token) {
//         next()
//     }else {
//         next('/login')
//     }
// })
