import { 
  Header,
  Sidebar,
  Home 
} from './components'

export const App = () => {
  return (
    <>
      <Sidebar />
      <main className='app'>
        <Home />
        <Header />
      </main>
    </>
  )
}

