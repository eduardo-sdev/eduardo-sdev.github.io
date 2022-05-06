import { 
  Header,
  Sidebar,
  Home,
  Footer
} from './components'

export const App = () => {
  return (
    <>
      <Sidebar />
      <main className='app'>
        <Home />
        <Header />
        <Footer />
      </main>
    </>
  )
}
