/*!

=========================================================
* Material Dashboard React - v1.8.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from '@material-ui/icons/Dashboard'
import Unarchive from '@material-ui/icons/Unarchive'

// core components/views for Admin layout
import DashboardPage from 'views/Dashboard/Dashboard.js'
import AboutUs from 'views/AboutUs/AboutUs.js'

const dashboardRoutes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    rtlName: 'لوحة القيادة',
    icon: Dashboard,
    component: DashboardPage,
    layout: '/admin'
  },
  {
    path: '/about-minion',
    name: 'About Us',
    icon: Unarchive,
    component: AboutUs,
    layout: '/admin'
  }
]

export default dashboardRoutes
