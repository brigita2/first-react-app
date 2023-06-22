import { Routes, Route, Link, NavLink } from 'react-router-dom';
import ContactUs from './Pages/ContactUs/ContactUs';
import DemoPage from './Pages/DemoPage/DemoPage';
import ProgramsPage from "./Pages/CodeAcademyProgramsPage/ProgramsPage/ProgramsPage";
import CounterPage from './Pages/CounterPage/CounterPage';
import ShoppingList from './Pages/ShoppingList/ShoppingList';
import CitiesPage from './Pages/CitiesPage/CitiesPage';
import ToDoPage from './Pages/ToDoPage/ToDoPage';
import ChuckNorrisPage from './Pages/ChuckNorrisPage/ChuckNorrisPage';
import DogsApi from './Pages/DogsApiPage/DogsApi';
import AiPage from './Pages/AIApiPage/AiPage';
import Api from './Pages/ApiPage/Api'
import UsersPage from './Pages/UsersPage/UsersPage';
import UserPage from './Pages/UsersPage/Components/UserPage';
import PostsPage from './Pages/UsersPage/Components/PostsPage';
import PostPage from './Pages/UsersPage/Components/PostPage';


function App() {
  return (
    <div className='App'>
      
      <nav className='main-navigation'>
        <ul className='nav-list'>
          <li className='nav-item'>
            <NavLink to='/' className='nav-link'>Home</NavLink>
          </li>

          <li className='nav-item'>
            <NavLink to='/demo' className='nav-link'>Demo Page</NavLink>
          </li>

          <li className='nav-item'>
            <NavLink to='/contact-us' className='nav-link'>Contact Page</NavLink>
          </li>

          <li className='nav-item'>
            <NavLink to='/programs' className='nav-link'>Programs Page</NavLink>
          </li>

          <li className='nav-item'>
            <NavLink to='/counter' className='nav-link'>Counters Page</NavLink>
          </li>

          <li className='nav-item'>
            <NavLink to='/shopping-list' className='nav-link'>Shopping List</NavLink>
          </li>

          <li className='nav-item'>
            <NavLink to='/cities' className='nav-link'>Cities Page</NavLink>
          </li>

          <li className='nav-item'>
            <NavLink to='/to-do' className='nav-link'>To do Page</NavLink>
          </li>

          <li>

            <NavLink to='/api' className='nav-link'>API Projects Page</NavLink>

              <ul className='inner-meniu'>
                  <li className='nav-item'>
                    <NavLink to='/api/chuck-norris' className='nav-link'>Chuck API Page</NavLink>
                  </li>

                  <li className='nav-item'>
                    <NavLink to='/api/dogs' className='nav-link'>Dogs Page</NavLink>
                  </li>
                  <li className='nav-item'>
                    <NavLink to='/api/ai' className='nav-link'>AI Page</NavLink>
                  </li>
              </ul>
          </li>

          <li>
                <NavLink to='/json' className='nav-link'>JSON API Page</NavLink>
                <ul>
                    <li className='nav-item'>
                      <NavLink to='/json/users' className='nav-link'>Users Page</NavLink>
                    </li>

                    <li className='nav-item'>
                      <NavLink to='/json/posts' className='nav-link'>Posts Page</NavLink>
                    </li>
                    
                </ul>
          </li>

      </ul>
      </nav>

      <Routes>
        <Route path='/' element={<h1>HomePage</h1>} />
        <Route path='/demo' element={<DemoPage />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/programs' element={<ProgramsPage />} />
        <Route path='/counter' element={<CounterPage />} />
        <Route path='/shopping-list' element={<ShoppingList />} />
        <Route path='/cities' element={<CitiesPage />} />
        <Route path='/to-do' element={<ToDoPage />} />

        <Route path='/api' element={<Api />} />
        <Route path='/api/chuck-norris' element={<ChuckNorrisPage />} />
        <Route path='/api/dogs' element={<DogsApi />} />
        <Route path='/api/ai' element={<AiPage />} />

        <Route path='/json/users' element={<UsersPage />} />
        <Route path='/json/users/:id' element={<UserPage />} />
        <Route path='/json/posts' element={<PostsPage />} />
        <Route path='/json/posts/:id' element={<PostPage />} />

        <Route path='*' element={
          <><h1>404 error. Page not found</h1><Link to='/'>Go Back to Home Page</Link></>
        }/>
      </Routes>
      
    </div>
  );
}

export default App;
