import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      children: [
        {
          path: "",
          component: () => import("./components/index.vue")
        },
        {
          path: "date",
          component: () => import("./components/date.vue")
        },
        {
          path: "componentTest",
          component: () =>
            import("./components/componentTest/componentTest.vue")
        },
        {
          path: "slot",
          component: () => import("./components/slot/slotTest.vue")
        },
        {
          path: "edge",
          component: () => import("./components/edge/edgeTest.vue")
        },
        {
          path: "next",
          component: () => import("./components/next/next.vue"),
          children: [
            {
              name: "next1",
              path: "next1",
              component: () => import("./components/next/child.vue")
            },
            {
              name: "compareTest",
              path: "compareTest",
              component: () => import("./components/next/compareTest.vue")
            },
            {
              name: "generatorTest1",
              path: "generatorTest1",
              component: () => import("./components/next/generatorTest1.vue")
            },
            {
              name: "generatorTest2",
              path: "generatorTest2",
              component: () => import("./components/next/generatorTest2.vue")
            },
            {
              name: "thunkify",
              path: "thunkify",
              component: () => import("./components/next/thunkify.vue")
            }
          ]
        }
      ]
    },
    {
      path: "/example",
      name: "example",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/examplePart.vue")
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/blotter",
      name: "blotter",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/blotter.vue")
    }
  ]
});
