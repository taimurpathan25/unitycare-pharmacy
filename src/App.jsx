// import { BrowserRouter, Route,BrowserRouter as Router, Routes } from 'react-router-dom'
// import './App.css'
// import Header from './components/Header'
// import Footer from './components/Footer'
// import Home from './Pages/Home'
// import DynamicTitle from './DynamicTitle'
// import Navbar from './components/Header/Navbar/Navbar'
// import GenerateRoutes from './GenerateRoutes'
// import { MENU } from './components/Header/Navbar/MenuData'
// import NotFound from './pages/NotFound'
// import MedicineList from './pages/Medicines/medicine-listing-page/MedicineList'
// import MedicineDetails from './pages/Medicines/medicine-details-page/MedicineDetails'


// function App() {

//   return (
//     <BrowserRouter>
//     <DynamicTitle/>
//       {/* <Header/> */}
//        <Navbar/>
//     <Routes>
//       <Route path='/' element={<Home/>}/>
//       <Route path="/medicineList/:medicineId/:variantId" element={<MedicineList />} />
//       <Route path='/medicine/:id/:variantId' element={<MedicineDetails/>}/>

//       {/* Dynamic Routes */}
//       {GenerateRoutes(MENU)}
//       {/* Dynamic Routes */}
//       <Route path='*' element={<NotFound/>} />
//     </Routes>
//       <Footer/>
//       </BrowserRouter>

//   )
// }

// export default App



import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './Pages/Home'
import DynamicTitle from './DynamicTitle'
import Navbar from './components/Header/Navbar/Navbar'
import GenerateRoutes from './GenerateRoutes'
import { MENU } from './components/Header/Navbar/MenuData'
import NotFound from './pages/NotFound'
import MedicineList from './pages/Medicines/medicine-listing-page/MedicineList'
import MedicineDetails from './pages/Medicines/medicine-details-page/MedicineDetails'
import Medicine from './pages/Medicine'
import GlobalDetailsPage from './components/common-components/search-bar/GlobalDetailsPage'

function App() {
  return (
    <BrowserRouter>
      <DynamicTitle/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        {/* Start main Menu Routes */}
        <Route path='/all-medicines' element={<Medicine/>}/>
        <Route path='/all-medicines/medicineDetail/:slug' element={<MedicineDetails />}/>
        {/* End main Menu Routes */}

        {/* Listing page */}
        <Route path="/:category/medicineList/:slug" element={<MedicineList />} />

        {/* Details page */}
        <Route path="/:category/medicineDetail/:slug/:variantSlug/" element={<MedicineDetails />} />

        {/* Dynamic Routes */}
        {GenerateRoutes(MENU)}

        {/* Global Search Details routes */}
  {/* <Route path="/:category/:slug" element={<GlobalDetailsPage />} />
  <Route path="/:category/:slug/:subslug" element={<GlobalDetailsPage />} /> */}

        {/* 404 */}
        <Route path='*' element={<NotFound/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
