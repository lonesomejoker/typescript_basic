import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MainRouter from './router/MainRouter.tsx'
import { TodosProvideer } from './store/todos.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TodosProvideer>
    <MainRouter/>
    </TodosProvideer>
  </StrictMode>,
)
