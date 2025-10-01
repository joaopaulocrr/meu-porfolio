import { BrowserRouter, Routes, Route } from 'react-router-dom'

//Importação de componentes
import Navbar from '../components/navbar/Navbar'


//Importação das páginas
import Home from '../pages/home/Home'
import About from '../pages/about/About'
import Courses from '../pages/courses/Courses'
import Projects from '../pages/projects/Projects'
import Contact from '../pages/contact/Contact'
import NotFound from '../pages/notFound/NotFound'

const AppRoutes = () => {
  return (
    <BrowserRouter>
    <Navbar />
        <Routes>
            <Route path='/' element=  { <Home />}/>
            <Route path='/about' element=  { <About />}/>
            <Route path='/courses' element=  { <Courses />}/>
            <Route path='/projects' element=  { <Projects />}/>
            <Route path='/contact' element=  { <Contact />}/>
            <Route path='*' element= { <NotFound />} /> {/** O path='*' em uma route é uma  rota para a página de erro quando uma url não é encontrada. Uma rota coringa.  */}
        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes