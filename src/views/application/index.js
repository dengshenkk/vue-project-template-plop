/**
 * application createTime 2021.06.12 15:57:18
 *
 */


export const applicationRouter = [
    {
        path: '/application',
        name: 'application',
        component: () => import(/* webpackChunkName: application */'@/views/application/index.vue')
    }
]
