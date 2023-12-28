// import axios from "axios";
// import { useEffect, useState } from "react";
// import ProfileComponent from "./ProfileComponent";
// import {BrowserRouter as Router,Link,Routes , Route, useParams} from 'react-router-dom';
// function UserComponent(){

// const {id}=useParams();
// const [data,setData] = useState([]);

// useEffect(()=>{
//   axios.get(`http://localhost:3000/api/listing`)
//   .then((response)=>{
//       setData(response.data.data);
//       // alert(response.data.message)
//       // console.log(response.status,response.data);
//   })
//   .catch((error)=>{
//     console.log(error);
//   });
// },[])


// return (
//     <>
   
//     <div className="container ">
    
//                 <h1 style={{textAlign:"center"}}>User Details</h1>
//                 <table className="table table-success ">
//                 <thead>
//                   <tr>
//                     <th scope="col">Sl No</th>
//                     <th scope="col">User Id</th>
//                     <th scope="col">Name</th>
//                     <th scope="col">Place</th>
//                     <th scope="col">Contact</th>
//                     <th scope="col">View Details</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                 {data.map((item,index)=>{
//                 return (
//                   <>
//                     {console.log("index.id : ", item._id)}
//                   <tr key={item._id}>
//                     <td>{index+1}</td>
//                     <td>{item._id}</td>
//                     <td>{item.name}</td>
//                     <td>{item.place}</td>
//                     <td >{item.contact}</td>
//                     <td><button className="btn btn-primary"><Link to={`/update/${item._id}`} style={{textDecoration:"none",color:"white"}}>View</Link></button></td>
                   
                  
//                   </tr>
//                   </>
//                   )
//                 })}
//                 </tbody>
//               </table>
  
          
// </div>                   
// </>
// )
// }
// export default UserComponent;


// import React, { useEffect, useState } from 'react';
// import ReactDOM from 'react-dom';
// import ReactPaginate from 'react-paginate';

// function UserComponent(){

// const {id} = useParams();

// useEffect(()=>{
//   axios.get(`http://localhost:3000/api/listing`)
//   .then((response)=>{
//       setData(response.data.data);
//       // alert(response.data.message)
//       // console.log(response.status,response.data);
//   })
//   .catch((error)=>{
//     console.log(error);
//   });
// },[currentPage])

// return (
//   <>
//   <ul>
//   <li
//         className={classnames('pagination-item', {
//           disabled: currentPage === 1
//         })}
//         onClick={onPrevious}
//       >
//         <div className="arrow left" />
//       </li>
//        <li
//        className={classnames('pagination-item', {
//          disabled: currentPage === lastPage
//        })}
//        onClick={onNext}
//      >
//        <div className="arrow right" />
//      </li>
//    </ul>
//    </>
// )

// }
// export default UserComponent;

// import axios from "axios";
// import { useEffect, useState } from "react";
// import { Link } from 'react-router-dom';

// // function UserComponent() {
// //   const [data, setData] = useState([]);
// //   const [currentPage, setCurrentPage] = useState(1);
// //   const [pageSize,setPageSize] = useState(10);
// //   const [totalPages, setTotalPages] = useState(0);

// //   useEffect(() => {
// //     fetchData();
// //   }, [currentPage,pageSize]); // Fetch data when the currentPage changes

// //   const fetchData = () => {
// //     axios.get(`http://localhost:3000/api/listing?page=${currentPage}&pageSize=${pageSize}`)
// //       .then((response) => {
// //         const { data, totalpages } = response.data;
// //         setData(data.datas || []);
// //         setTotalPages(totalpages || 0);
// //       })
// //       .catch((error) => {
// //         console.log(error);
// //       });
// //   };
// function UserComponent() {
//   const [data, setData] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [pageSize, setPageSize] = useState(10);
//   const [totalPages, setTotalPages] = useState(0);

//   useEffect(() => {
//     fetchData();
//   }, [currentPage, pageSize]); // Fetch data when the currentPage or pageSize changes

//   const fetchData = () => {
//     axios
//       .get(`http://localhost:3000/api/listing?page=${currentPage}&pageSize=${pageSize}`)
//       .then((response) => {
//         const { data, totalpages } = response.data;
//         setData(data.datas || []);
//         setTotalPages(totalpages || 0);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
//   // const handlePreviousPage = () => {
//   //   // setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
//   //   if(currentPage>1){
//   //     setCurrentPage((prevPage)=>prevPage-1)
//   //   }
//   // };

//   // const handleNextPage = () => {
//   //   // setCurrentPage((prevPage) => (prevPage < totalPages ? prevPage + 1 : totalPages));
//   // if(currentPage  < totalPages){
//   //   setCurrentPage((prevPage)=>prevPage+1);
//   // }
//   // };

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };

//   const renderPageNumbers = () => {
//     const pageNumbers = [];
//     for (let i = 1; i <= totalPages; i++) {
//       pageNumbers.push(
//         <button key={i} onClick={() => handlePageChange(i)} disabled={i === currentPage}>
//           {i}
//         </button>
//       );
//     }
//     return pageNumbers;
//   };

//   return (
//     <>
//       <div className="container">
//         <h1 style={{ textAlign: "center" }}>User Details</h1>
        // <table className="table table-success">
        //   <thead>
        //     <tr>
        //       <th scope="col">Sl No</th>
        //       <th scope="col">User Id</th>
        //       <th scope="col">Name</th>
        //       <th scope="col">Place</th>
        //       <th scope="col">Contact</th>
        //       <th scope="col">View Details</th>
        //     </tr>
        //   </thead>
        //   <tbody>
        //     {data.map((item, index) => {
        //       return (
        //         <tr key={item._id}>
        //           <td>{index + 1}</td>
        //           <td>{item._id}</td>
        //           <td>{item.name}</td>
        //           <td>{item.place}</td>
        //           <td>{item.contact}</td>
        //           <td>
        //             <button className="btn btn-primary">
        //               <Link to={`/update/${item._id}`} style={{ textDecoration: "none", color: "white" }}>View</Link>
        //             </button>
        //           </td>
        //         </tr>
        //       );
        //     })}
        //   </tbody>
        // </table>

//         {/* <div style={{ textAlign: "center" }}>
//           <button onClick={handlePreviousPage} disabled={currentPage === 1}>Previous Page</button>
//           <span> Page {currentPage} of {totalPages} </span>
//           <button onClick={handleNextPage} disabled={currentPage === totalPages || totalPages === 0}>Next Page</button>
//         </div> */}
//         <div style={{ textAlign: "center" }}>
//         {totalPages > 0 && renderPageNumbers()}
//         </div>
//       </div>
//     </>
//   );
// }

// export default UserComponent;


import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
// import LoaderComponent from "./LoaderComponent";
import LoadingComponent from "./LoadingComponent";

function UserComponent() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalPages, setTotalPages] = useState(0);
  const [loading,setLoading] = useState(true);



  const fetchData = () => {
    try {
      const token = localStorage.getItem('adminToken'); 
      console.log("token",token);
      axios
      .get(`http://localhost:3000/listing?page=${currentPage}&pageSize=${pageSize}`,
      {
        headers:{
          Authorization:`Bearer ${token}`,
        },
      }
      )
      .then((response) => {
        setData(response.data.data.datas || []);
        setTotalPages(response.data.data.totalpages || 0);
      })
      .catch((error) => {
        console.log(error);
      });
    } catch (error) {
      console.log(error);
    }finally{
     setTimeout(() => {
     setLoading(false);
     }, 300);
   }
   
  };
    useEffect(() => {
    fetchData();
  }, [currentPage, pageSize,loading]);

  const handlePageChange = (page) => {
    setCurrentPage(page); 
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li key={i} className={`page-item ${i === currentPage ? 'active' : ''}`}>
          <button className="page-link" onClick={() => (handlePageChange(i),setLoading(true))}>
            {i}
          </button>
        </li>
      );
    }
    return pageNumbers;
  };
  return (
    <>
    <div>{loading?(<LoadingComponent/>):(
      <div>
        {
 <div className="container">
 <h1 style={{ textAlign: "center" }}>User Details</h1>
 <table className="table table-success">
   <thead>
     <tr>
       <th scope="col">Sl No</th>
       <th scope="col">User Id</th>
       <th scope="col">Name</th>
       <th scope="col">Place</th>
       <th scope="col">Contact</th>
       <th scope="col">View Details</th>
     </tr>
   </thead>
   <tbody>
     {data.map((item, index) => {
       const serialNumber = (currentPage - 1) * pageSize + index + 1;

       return (
         <tr key={item._id}>
           <td>{serialNumber}</td>
           <td>{item._id}</td>
           <td>{item.name}</td>
           <td>{item.place}</td>
           <td>{item.contact}</td>
           <td>
             <button className="btn btn-primary">
               <Link to={`/update/${item._id}`} style={{ textDecoration: "none", color: "white" }}>View</Link>
             </button>
           </td>
         </tr>
       );
     })}
   </tbody>
 </table>
 <nav className="d-flex justify-content-center" aria-label="Page navigation">
 <ul className="pagination">
   {renderPageNumbers()}
 </ul>
</nav>
</div>
        }
      </div>
    )}

    </div>
   
    </>
  );
}

export default UserComponent;
