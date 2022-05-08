import { 
  Header,
  Sidebar,
  Home,
  Projects,
  Footer
} from './components'

export const App = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <main className='app'>
        <Home />
        <Projects />
        <Footer />
      </main>
    </>
  )
}
