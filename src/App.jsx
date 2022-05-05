import { 
  Header,
  Sidebar,
} from './components'

export const App = () => {
  return (
    <>
      <Sidebar />
      <main className='app'>
        <Header />
      </main>
    </>
  )
}

