import Login from './components/LoginPage.vue'
import Home from './components/HomePage.vue'
import SignUp from './components/SignUpPage.vue'
import AboutUs from './components/AboutUsPage.vue'
import ForgotPassword from './components/ForgotPassword.vue'
import AdminLogin from './components/AdminLogin.vue'
import PasswordResetLink from './components/PasswordResetLink.vue'
import NewPasswordPage from './components/NewPasswordPage.vue'


export default[
    {
        path: '',
        name: 'Home',
        component: Home
    },
    {
        path: '/SignUp',
        name: 'SignUp',
        component: SignUp
    },
    {
        path: '/LogIn',
        name: 'LogIn',
        component: Login
    },
    {
        path: '/AboutUs',
        name: 'AboutUs',
        component: AboutUs
    },
    {
        path: '/ForgotPassword',
        name: 'ForgotPassword',
        component: ForgotPassword
    },
    {
        path: '/AdminLogin',
        name: 'AdminLogin',
        component: AdminLogin
    },
    {
        path: '/PasswordResetLink',
        name: 'PasswordResetLink',
        component: PasswordResetLink
    },
    {
        path: '/NewPasswordPage',
        name: 'NewPasswordPage',
        component: NewPasswordPage
    }
]