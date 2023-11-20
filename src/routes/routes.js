import config from '../config';
import ProductDetailLayout from '../layouts/ProductDetail/ProductLayout';
import Checkout from '../pages/Checkout/Checkout';
import Dashboard from '../pages/Dashboard';
import SearchProduct from '../pages/SearchProduct'
import Login from '../pages/Login'
import ProductDetail from '../pages/ProductDetail';
import NoPermission from '../pages/NoPermission';
import AdminDashboard from '../pages/admin/Dashboard';
import AdminLayout from '../layouts/AdminLayout';
import AdminProductList from '../pages/admin/ProductList/ProductList';
const publicRoutes = [
    //User
    { path: config.routes.dashboard, component: Dashboard },
    { path: config.routes.productDetail, component: ProductDetail, layout: ProductDetailLayout },
    { path: config.routes.login, component: Login},
    { path: config.routes.checkout, component: Checkout, layout: ProductDetailLayout },
    { path: config.routes.searchProduct, component: SearchProduct, layout: ProductDetailLayout },
    //Admin
    { path: config.routes.dashboardAdmin, component: AdminDashboard, layout: AdminLayout },
    { path: config.routes.productListAdmin, component: AdminProductList, layout: AdminLayout },
    //Error
    { path: config.routes.noPermission, component:NoPermission , layout: ProductDetailLayout },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };