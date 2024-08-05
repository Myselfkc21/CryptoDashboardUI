import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraBaseProvider } from '@chakra-ui/react'
import { theme } from './theme/index.js'
import "@fontsource/ubuntu"; // Defaults to weight 400
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <ChakraBaseProvider theme={theme}>
    <App />
  </ChakraBaseProvider>
  </React.StrictMode>,
)
