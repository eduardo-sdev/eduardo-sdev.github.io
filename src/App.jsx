import { 
  Header,
  Sidebar,
  Home,
  Projects,
  Skills,
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
        <Skills />
        <Footer />
      </main>
    </>
  )
}

