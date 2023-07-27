import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import Users from './components/Users/Users';
import AdminBar from './components/AdminBar/AdminBar';
import Products from './components/Products/Products';
import { getAllCategories, getAllProducts, getAllUsers } from './redux/actions';
import Categories from './components/Categories/Categories';
import Form from './components/Form/Form';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import axios from 'axios';

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [access, setAccess] = useState(false);

  const handleLogin = async (userData) => {
    const { email, password } = userData;
    const response = await axios("https://api-market-henry-jczt.onrender.com/PF/userAll");
    const data = response.data;
    const userFilter = data.filter((user) => user.email === email && user.password === password)
    const userEnable = userFilter.filter((user) => user.status === 1)
    const userRole = userEnable[0].role === 2;
    if (userRole === true) {
      setAccess(true);
      navigate('/home');
    }

    if (userFilter.length > 0) {
      const userRole = userFilter[0].role === 2;
      if (userRole) {
        setAccess(true);
        navigate('/home');
      } else {
        console.log("User is not authorized to access.");
      }
    } else {
      console.log("User not found.");
    }
  };

  useEffect(() => {
    if(access === false){
      navigate('/')
    }
    dispatch(getAllProducts());
    dispatch(getAllCategories());
    dispatch(getAllUsers());
  }, [access, dispatch, navigate]);


  return (
    <div>
      <NavBar />
      <div className="container-fluid fondo">
        <div className="row">
          <div className="col-2">
            { location.pathname !== '/' && <AdminBar setAccess={setAccess}/> }
          </div>
          <div className="col-10 fondo">
            <Routes>
              {/* <Route index element={<Home />} /> */}
              <Route path="/" element={<Form login={handleLogin}/>}/>
              <Route path="/home" element={<Home />} />
              <Route path="/users" element={<Users />} />
              <Route path='/products' element={<Products />} />
              <Route path='/categories' element={<Categories />}/>
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}


export default App;
