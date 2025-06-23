// import React from 'react'
// //import Routing from './Routing';
// // // import Profile from './Profile';
//   import Crud from './Crud';


// const App = () => {
//   return (
//      <>
//      {/* <Variables /> */}
//      {/* <Profile /> */}
//       <Crud />  
//       {/*<Routing />*/}
//     </>
//   )
// }

//  export default App;

// import PopupExample from "./PopupExample";

// const App = () => {
//   return (
//     <>
//       <PopupExample />
//     </>
//   );
// };

// export default App;
// 
// import React from 'react'
// import './Store.js'
// import Forms from './Forms.js'
// import Account from './Account.js'

// const App = () => {
//   return (
//     <>
//       <h1>Banking Application</h1>
//       <Forms />
//       <Account />
//     </>
//   )
// }

// export default App
// import React from 'react';
// import { useDispatch } from "react-redux";

//  function App() {
// const dispatch = useDispatch()

//  async function fetchData(dispatch, getState) {
//   let res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   let data = await res.json();
//   console.log(data);
// }

//   return (
//     <div>
//       <h3>Todo app using redux react</h3> 
      
//       <button onClick={() =>dispatch(fetchData)}>Fetch Data</button>

//     </div>

//   );
//  }
//  export default App;

// import React from 'react';
// import { useDispatch } from 'react-redux';
// import axios from 'axios';

// function App() {

//   const dispatch = useDispatch();

//   const fetchData = () => {
//     axios.get('http://localhost:5000/users')
//       .then((res) => {
//         console.log(res.data);
        
//       })
//   };

  
//   const handleDelete = async (id) => {
//     try {
      
//       const response = await axios.get('http://localhost:5000/users');
//       const currentData = response.data; 
//       console.log('Current Data:', currentData);
//       alert("Are you sure you want to delete this record?");
//       await axios.delete(`http://localhost:5000/users/${id}`);

//       console.log(`Record with id ${id} deleted successfully.`);
//    const updatedData = currentData.filter((item) => item.id !== id);
//       console.log('Updated Data:', updatedData);
//     } catch (error) {
//       console.error('Error during deletion:', error);
//     }
//   };
//   return (
//     <>
//     <h1> Crud Operations page</h1>

//     <div>
//       <button onClick={()=>fetchData(dispatch)}>get</button>
//       <span>  </span> 
//       <button onClick={()=>handleDelete(1258)}>delete</button>
//     </div>
    
//     </>
//   );
// }
// export default App;

// ***********Crud Operations using redux*************


// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { setEditUser } from './CrudActions'; // <-- Import setEditUser from the correct path
// import CrudEditComponent from './CrudEdit'; // Rename import
// import CrudForm from './CrudForm'; // Import CrudForm
// import CrudTable from './CrudTable'; // Import CrudTable
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
 

// const App = () => {
//   const dispatch = useDispatch();
//   const editUser = useSelector((state) => state.editUser); // Correct variable name

//   return (
//     <div>
//       <BrowserRouter>
//         <Routes>
//           <Route
//             path="/"
//             element={ 
//               <>
//                 <CrudForm />
//                 <CrudTable />
//               </>
//             }
//           />
//           <Route path="/CrudEdit/:id" element={<CrudEditComponent />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// };

// export default App;


// *************Sample code for siblings************


// import React from 'react'

// import FileInputParent from './FileInputParent'

// const App = () => {
//   return (
    
//     <>
//   <FileInputParent />
    
//     </>
//   )
// }

// export default App
// ******************Employee Details Form*************

// import React from 'react'
// import SampleFrom from './SampleFrom'

// const App = () => {
//   return (
//     <>
//     <SampleFrom />
//     </>
//   )
// }

// export default App

// ******************Employee Id********************

// import React from 'react'
// import EmployeeId from './EmployeeId'

// const App = () => {
//   return (
//     <div>
//       <EmployeeId />
//     </div>
//   )
// }

// export default App
// import React from 'react'
// import EmployeesDetailsJson from './EmployeesDetailsJson'

// const App = () => {
//   return (
    
//     <>
//     <EmployeesDetailsJson />
//     </>
//   )
// }

// export default App
//*********************Fetching posts from Api***************************** */

// import React from 'react'
// import Apipostsrender from './Apipostsrender'

// const App = () => {
//   return (
//     <>
//     <Apipostsrender />
//     </>
//   )
// }

// export default App
// ******************Student Dashboard**********************
// import React from 'react'
// import StudentDashboard from './StudentDashboard'

// const App = () => {
//   return (
//     <>
//     <StudentDashboard />
//     </>
//   )
// }

// export default App

// *******************Counter App***********************
// import React from 'react';
// import ReactCounter from './ReactCounter';


// const App = () => {
//   return (
//     <>
//     <ReactCounter />
//       <h1>Counter App</h1>
//       <p>This is a simple counter application.</p>
//       {/* Add your counter component here */}
//     </>
//   );
// }
// export default App;

// ******************UseCallback Hook**********************

// import React from 'react'
// import Usecallback from './Usecallback'

// const App = () => {
//   return (
//     <>
//     <Usecallback />
//     </>
//   )
// }

// export default App

//****************Application******************************

// import React from 'react';
// import Application from './Application';
// const App =() => {
//   return (
//     <>
//       <Application />
//     </>
//   );  

// }
// export default App;

// ******************Array Sum**********************
// import React from 'react';
// import ArraySum from './ArraySum';
// const App = () => {
//   return (
//     <>
//       <ArraySum />
//     </>
//   );
// }
// export default App;
// ******************Nested Array Sum**********************
// import React from 'react';
// import NestedArraySum from './NestedArraySum';
// const App = () => {
//   return (
//     <>
//       <NestedArraySum />
//     </>
//   );
// }
// export default App;
// ******************String to Number Conversion**********************
// import React from 'react';
// import StringintoNum from './StringintoNum';

// const App = () => {
//   return(
//     <>
//     <StringintoNum />
//     </>
//   )
// }
// export default App;
// ******************Fibonacci Series**********************
// import React from 'react';
// import Fibbonaci from './Recursivefunc.jsx/Fibbonaci';
// const App = () => {
//   return (
//     <div>
      
//       <h1>Fibonacci Series</h1>
//       <p>This is Recursion Function</p>
//       <Fibbonaci />
//     </div>
//   );
// }
// export default App;
// ******************Factorial**********************
import React from 'react';
import Factorial from './Recursivefunc.jsx/Factorial';

const App = () => {
  return (
    <div>
      <Factorial />
      <h1>Factorial Calculation</h1>
    </div>
  )
}
export default App;