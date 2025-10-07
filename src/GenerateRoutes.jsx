import { div, label } from 'framer-motion/client'
import React from 'react'
import { Route } from 'react-router-dom'

const LazyPage = ({label}) => {
    <div className='p-10 text-2xl'>{label} Page</div>
}
const GenerateRoutes = (menu) => {
  return menu.map((item, i) =>
    item.children ? (
      item.children.map((child, j) => (
        <Route key={j} path={child.to} element={child.element} />
      ))
    ) : (
      <Route key={i} path={item.to} element={item.element} />
    )
  );
}

export default GenerateRoutes