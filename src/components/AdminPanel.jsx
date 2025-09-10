// AdminPanel.js
// import React, { useState } from 'react';

// const mockArtisans = [
//   { id: 1, name: 'Ravi', verified: false },
//   { id: 2, name: 'Kavya', verified: false }
// ];

// function AdminPanel() {
//   const [artisans, setArtisans] = useState(mockArtisans);

//   const verifyArtisan = (id) => {
//     setArtisans(artisans.map(a => a.id === id ? { ...a, verified: true } : a));
//   };

//   return (
//     <div>
//       <h2>Admin Panel</h2>
//       <table className="table">
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Verified</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {artisans.map((artisan) => (
//             <tr key={artisan.id}>
//               <td>{artisan.name}</td>
//               <td>{artisan.verified ? "Yes" : "No"}</td>
//               <td>
//                 {!artisan.verified && (
//                   <button className="btn btn-primary"
//                     onClick={() => verifyArtisan(artisan.id)}>
//                     Verify
//                   </button>
//                 )}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default AdminPanel;


import React from 'react';

function AdminPanel() {
  return (
    <div className="container mt-5">
      <h2>Admin Panel</h2>
      <p>Welcome, Admin!</p>
    </div>
  );
}

export default AdminPanel;
