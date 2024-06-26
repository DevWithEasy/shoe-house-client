import { useRoutes } from 'react-router-dom'
import Admin_Administration from './pages/Admin_Administration'
import AdminDashboard from './pages/Dashboard_Admin'
import Home from './pages/Home'
import Layout from './pages/Layout'
import LayoutAdmin from './pages/LayoutAdmin'
import Protected from './pages/Protected'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Brands from './pages/brands/Brands'
import New_Brand from './pages/brands/New_brand'
import Update_Brand from './pages/brands/Update_category'
import Invoice from './pages/invoices/Invoice'
import Invoices from './pages/invoices/Invoices'
import New_Invoice from './pages/invoices/New_Invoice'
import Update_invoice from './pages/invoices/Update_invoice'
import New_product from './pages/products/New_product'
import PrintBarCode from './pages/products/PrintBarCode'
import Products from './pages/products/Products'
import Products_Home from './pages/products/Products_Home'
import Update_product from './pages/products/Update_product'
import New_purchase from './pages/purchases/New_purchase'
import Purchase from './pages/purchases/Purchase'
import Purchases from './pages/purchases/Purchases'
import New_report from './pages/reports/New_report'
import Reports from './pages/reports/Reports'
import New_user from './pages/users/New_user'
import Update_user from './pages/users/Update_user'
import Users from './pages/users/Users'

function App() {
  const routes= useRoutes([
    {
      path : '/',
      element : <Protected>
        <Layout>
          <Home/>
        </Layout>
      </Protected>
    },
    {
      path : '/products/',
      element : 
      <Protected>
      <Layout>
        <Products_Home/>
      </Layout>
    </Protected>
    },
    {
      path : '/invoice/new',
      element : 
      <Protected>
      <Layout>
        <New_Invoice/>
      </Layout>
    </Protected>
    },
    {
      path : '/invoices',
      element : 
      <Protected>
      <Layout>
        <Invoices/>
      </Layout>
    </Protected>
    },
    {
      path : '/invoice/:id',
      element : <Protected>
      <Layout>
        <Invoice/>
      </Layout>
    </Protected>
    },
    {
      path : '/admin/administration',
      element : <Protected>
      <LayoutAdmin>
        <Admin_Administration/>
      </LayoutAdmin>
    </Protected>
    },
    {
      path : '/admin/dashboard',
      element : <Protected>
      <LayoutAdmin>
        <AdminDashboard/>
      </LayoutAdmin>
    </Protected>
    },
    {
      path : '/admin/invoices',
      element : 
      <Protected>
      <LayoutAdmin>
        <Invoices/>
      </LayoutAdmin>
    </Protected>
    },
    {
      path : '/admin/invoice/:id',
      element : <Protected>
      <LayoutAdmin>
        <Invoice/>
      </LayoutAdmin>
    </Protected>
    },
    {
      path : '/admin/invoice/update/:id',
      element : <Protected>
      <LayoutAdmin>
        <Update_invoice/>
      </LayoutAdmin>
    </Protected>
    },
    {
      path : '/admin/product/new',
      element : <Protected>
      <LayoutAdmin>
        <New_product/>
      </LayoutAdmin>
    </Protected>
    },
    {
      path : '/admin/products',
      element : 
      <Protected>
      <LayoutAdmin>
        <Products/>
      </LayoutAdmin>
    </Protected>
    },
    {
      path : '/admin/printbarcode',
      element : 
      <Protected>
      <LayoutAdmin>
        <PrintBarCode/>
      </LayoutAdmin>
    </Protected>
    },
    {
      path : '/admin/product/:id',
      element : 
      <Protected>
      <LayoutAdmin>
        <Update_product/>
      </LayoutAdmin>
    </Protected>
    },
    {
      path : '/admin/brand/new',
      element : <Protected>
      <LayoutAdmin>
        <New_Brand/>
      </LayoutAdmin>
    </Protected>
    },
    {
      path : '/admin/brands',
      element : <Protected>
      <LayoutAdmin>
        <Brands/>
      </LayoutAdmin>
    </Protected>
    },
    {
      path : '/admin/brand/:id',
      element : <Protected>
      <LayoutAdmin>
        <Update_Brand/>
      </LayoutAdmin>
    </Protected>
    },
    {
      path : '/admin/users',
      element : <Protected>
      <LayoutAdmin>
        <Users/>
      </LayoutAdmin>
    </Protected>
    },
    {
      path : '/admin/user/new',
      element : <Protected>
      <LayoutAdmin>
        <New_user/>
      </LayoutAdmin>
    </Protected>
    },
    {
      path : '/admin/user/:id',
      element : <Protected>
      <LayoutAdmin>
        <Update_user/>
      </LayoutAdmin>
    </Protected>
    },
    {
      path : '/admin/purchase/new',
      element : <Protected>
      <LayoutAdmin>
        <New_purchase/>
      </LayoutAdmin>
    </Protected>
    },
    {
      path : '/admin/purchases',
      element : <Protected>
      <LayoutAdmin>
        <Purchases/>
      </LayoutAdmin>
    </Protected>
    },
    {
      path : '/admin/purchase/:id',
      element : <Protected>
      <LayoutAdmin>
        <Purchase/>
      </LayoutAdmin>
    </Protected>
    },
    {
      path : '/admin/purchase/update/:id',
      element : <Protected>
      <LayoutAdmin>
        <Purchase/>
      </LayoutAdmin>
    </Protected>
    },
    {
      path : '/admin/report/new',
      element : <Protected>
      <LayoutAdmin>
        <New_report/>
      </LayoutAdmin>
    </Protected>
    },
    {
      path : '/admin/reports',
      element : <Protected>
      <LayoutAdmin>
        <Reports/>
      </LayoutAdmin>
    </Protected>
    },
    {
      path : '/signup',
      element : <Signup/>
    },
    {
      path : '/signin',
      element : <Signin/>
    }
  ])

  return routes
}

export default App
