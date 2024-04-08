import React, { ReactNode } from 'react'
import '@/assets/styles/global.css';
export const metadata = {
    title : 'Paradise Holies | Find the perfect rental',
    description : 'Find the perfect rental property',
    keywords: 'find,find rentals, find properties the perfect rental property'
}
interface MainLayoutPros{
    children:ReactNode;
}
const MainLayout:React.FC<MainLayoutPros> = ({ children }) => {
  return (
    <html lang='end'>
        <body>
        <div>{children}</div>
        </body>
    </html>
  )
}

export default MainLayout;