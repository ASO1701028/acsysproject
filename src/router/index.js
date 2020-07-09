import Vue from "vue";
import VueRouter from "vue-router";
import Calendar from "../components/Calendar";

import UserLogin from '@/components/UserLogin'
import UserSignUp from '@/components/UserSignUp'
// import Calorie from '@/components/Calendar';
// import Calendar from "@/components/Calendar";

// import Home from "../views/login.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/login",
        name: "login",
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
    ///////ここに追記///////
    {
        path: "/calendar",
        name: "calendar",
        component: () =>import("../components/Calendar")
    }
    ///////ここに追記///////
];

const router = new VueRouter({
    routes
});

export default router;








// import Vue from 'vue'
// import Router from 'vue-router'
//
// // components
// import UserLogin from '@/components/UserLogin'
// import UserSignUp from '@/components/UserSignUp'
// import Save_Calorie from '@/components/Save_Calorie';
// // import Calendar from "@/components/Calendar";
//
// Vue.use(Router)
//
// export default new Router({
//
// // const router = new Router({
//     routes: [
//         {
//             path: '/login',
//             name: 'login',
//             component: UserLogin,
//             meta: {
//                 isPublic: true
//             }
//         },
//         {
//             path: '/signup',
//             name: 'signup',
//             component: UserSignUp,
//             meta: {
//                 isPublic: true
//             }
//         },
//         {
//             path: '/Save_Calorie',
//             component: Save_Calorie,
//         },
//         {
//             path: '/calendar',
//             name: 'calendar',
//             component: () =>import("@/components/Calendar.vue")
//         }
//     ]
// });

// router.beforeEach((to,from,next)=>{
//     if(to.matched.some(page => page.meta.isPublic) || Store.state.auth.token) {
//         next()
//     }else {
//         next('/login')
//     }
// })
