import { createRouter,createWebHistory } from "vue-router";
import EmployeeList from '../view/employee/EmployeeList';
import ReportList from '../view/report/ReportList.vue';

const routes=[
    {path: '/employee',component:EmployeeList},
    {path: '/report',component:ReportList},
    // {path:'/:pathMacth(.*)*',component:TheError},
]
const router= createRouter({
    history:createWebHistory(process.env.BASE_URL),
    routes
})
export default router
