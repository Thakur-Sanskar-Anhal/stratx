import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThirdwebProvider } from 'thirdweb/react'
import { Bounce, ToastContainer, toast } from 'react-toastify'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
  <ThirdwebProvider>
    <App />
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      transition={Bounce}
    />
  </ThirdwebProvider>
  
  </>
  

)