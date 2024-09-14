// import React from "react";
// import { BsThreeDots } from "react-icons/bs";
// import notificationImg from "../Assets/notificationImg.png";

// const OnboardTable = () => {
//   const requests = [
//     {
//       id: 1,
//       name: "John Martin",
//       contact: "providerrequest@gmail.com +96213105164",
//       category: "Electricity",
//       subcategory: "wirting",
//       providers: "120",
//       rejected: "12-08-2024",
//       city: "Miami",
//       image: notificationImg,
//     },
//     {
//       id: 2,
//       name: "John Martin",
//       contact: "providerrequest@gmail.com +96213105164",
//       category: "Electricity",
//       subcategory: "wirting",
//       providers: "120",
//       rejected: "12-08-2024",
//       city: "Miami",
//       image: notificationImg,
//     },
//     {
//       id: 3,
//       name: "John Martin",
//       contact: "providerrequest@gmail.com +96213105164",
//       category: "Electricity",
//       subcategory: "wirting",
//       providers: "120",
//       rejected: "12-08-2024",
//       city: "Miami",
//       image: notificationImg,
//     },
//     {
//       id: 4,
//       name: "John Martin",
//       contact: "providerrequest@gmail.com +96213105164",
//       category: "Electricity",
//       subcategory: "wirting",
//       providers: "120",
//       rejected: "12-08-2024",
//       city: "Miami",
//       image: notificationImg,
//     },
//     {
//       id: 5,
//       name: "John Martin",
//       contact: "providerrequest@gmail.com +96213105164",
//       category: "Electricity",
//       subcategory: "wirting",
//       providers: "120",
//       rejected: "12-08-2024",
//       city: "Miami",
//       image: notificationImg,
//     },
//     {
//       id: 6,
//       name: "John Martin",
//       contact: "providerrequest@gmail.com +96213105164",
//       category: "Electricity",
//       subcategory: "wirting",
//       providers: "120",
//       rejected: "12-08-2024",
//       city: "Miami",
//       image: notificationImg,
//     },
//   ];

//   return (
//     <div className="mt-4 ">
//       <div className="overflow-x-auto rounded-lg">
//         <table className="min-w-full bg-white border ">
//           <thead>
//             <tr className="bg-[#2B4DC994] text-center text-sm  text-white">
//               <th className="p-2 border-r border-white">
//                 <input type="checkbox" className="h-4 w-4 rounded" />
//               </th>
//               <th className="p-2 border-r border-white">ID</th>
//               <th className="p-2 border-r border-white">Provider</th>
//               <th className="p-3 border-r border-white">Contact</th>
//               <th className="p-2 border-r border-white">Category</th>
//               <th className="p-2 border-r border-white">Sub-Category</th>
//               <th className="p-2 border-r border-white">Providers</th>
//               <th className="p-2 border-r border-white">Denied Date</th>
//               <th className="p-2 border-r border-white">City</th>
//               <th className="p-2">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {requests.map((request, index) => (
//               <tr
//                 key={request.id}
//                 className="border-b text-sm text-center text-gray-800"
//               >
//                 <td className="p-2">
//                   <input type="checkbox" className="h-4 w-4 rounded" />
//                 </td>
//                 <td className="p-2">{`0${index + 1}`}</td>
//                 <td className="p-2">
//                   <div className="flex items-center space-x-1">
//                     <img
//                       src={request.image}
//                       alt="Provider"
//                       className="w-8 h-8 rounded-full"
//                     />
//                     <span> {request.name}</span>
//                   </div>
//                 </td>
//                 <td className="p-2">{request.contact}</td>
//                 <td className="p-4">{request.category}</td>
//                 <td className="p-2">{request.subcategory}</td>
//                 <td className="p-2">{request.providers}</td>
//                 <td className="p-2">{request.rejected}</td>
//                 <td className="p-2">{request.city}</td>
//                 <td className="p-2">
//                   <BsThreeDots className="h-6 w-6 text-[#707070] text-center" />
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default OnboardTable;

// import React from "react";
// import { BsThreeDots } from "react-icons/bs";
// import notificationImg from "../Assets/notificationImg.png";

// const OnboardTable = () => {
//   const requests = [
//     {
//       id: 1,
//       name: "John Martin",
//       contact: "providerrequest@gmail.com +96213105164",
//       category: "Electricity",
//       subcategory: "wirting",
//       providers: "120",
//       rejected: "12-08-2024",
//       city: "Miami",
//       image: notificationImg,
//     },
//     {
//       id: 2,
//       name: "John Martin",
//       contact: "providerrequest@gmail.com +96213105164",
//       category: "Electricity",
//       subcategory: "wirting",
//       providers: "120",
//       rejected: "12-08-2024",
//       city: "Miami",
//       image: notificationImg,
//     },
//     {
//       id: 3,
//       name: "John Martin",
//       contact: "providerrequest@gmail.com +96213105164",
//       category: "Electricity",
//       subcategory: "wirting",
//       providers: "120",
//       rejected: "12-08-2024",
//       city: "Miami",
//       image: notificationImg,
//     },
//     {
//       id: 4,
//       name: "John Martin",
//       contact: "providerrequest@gmail.com +96213105164",
//       category: "Electricity",
//       subcategory: "wirting",
//       providers: "120",
//       rejected: "12-08-2024",
//       city: "Miami",
//       image: notificationImg,
//     },
//     {
//       id: 5,
//       name: "John Martin",
//       contact: "providerrequest@gmail.com +96213105164",
//       category: "Electricity",
//       subcategory: "wirting",
//       providers: "120",
//       rejected: "12-08-2024",
//       city: "Miami",
//       image: notificationImg,
//     },
//     {
//       id: 6,
//       name: "John Martin",
//       contact: "providerrequest@gmail.com +96213105164",
//       category: "Electricity",
//       subcategory: "wirting",
//       providers: "120",
//       rejected: "12-08-2024",
//       city: "Miami",
//       image: notificationImg,
//     },
//   ];

//   return (
//     <div className="mt-4 ">
//       <div className="overflow-x-auto rounded-lg">
//         <table className="min-w-full bg-white border ">
//           <thead>
//             <tr className="bg-[#2B4DC994] text-center text-sm  text-white">
//               <div className="p-2">
//                 <th className="p-2 border-r border-white">
//                   <input type="checkbox" className="h-4 w-4 rounded" />
//                 </th>
//                 <th className="p-2 border-r border-white">ID</th>
//                 <th className="p-2 border-r border-white">Provider</th>
//                 <th className="p-3 border-r border-white">Contact</th>
//                 <th className="p-2 border-r border-white">Category</th>
//                 <th className="p-2 border-r border-white">Sub-Category</th>
//                 <th className="p-2 border-r border-white">Providers</th>
//                 <th className="p-2 border-r border-white">Denied Date</th>
//                 <th className="p-2 border-r border-white">City</th>
//                 <th className="p-2">Actions</th>
//               </div>
//             </tr>
//           </thead>
//           <tbody>
//             {requests.map((request, index) => (
//               <tr
//                 key={request.id}
//                 className="border-b text-sm text-center text-gray-800"
//               >
//                 <div className="p-2">
//                   <td className="p-2">
//                     <input type="checkbox" className="h-4 w-4 rounded" />
//                   </td>
//                   <td className="p-2">{`0${index + 1}`}</td>
//                   <td className="p-2">
//                     <div className="flex items-center space-x-1">
//                       <img
//                         src={request.image}
//                         alt="Provider"
//                         className="w-8 h-8 rounded-full"
//                       />
//                       <span> {request.name}</span>
//                     </div>
//                   </td>
//                   <td className="p-2">{request.contact}</td>
//                   <td className="p-4">{request.category}</td>
//                   <td className="p-2">{request.subcategory}</td>
//                   <td className="p-2">{request.providers}</td>
//                   <td className="p-2">{request.rejected}</td>
//                   <td className="p-2">{request.city}</td>
//                   <td className="p-2">
//                     <BsThreeDots className="h-6 w-6 text-[#707070] text-center" />
//                   </td>
//                 </div>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default OnboardTable;

// import React from "react";
// import { BsThreeDots } from "react-icons/bs";
// import notificationImg from "../Assets/notificationImg.png";

// const OnboardTable = () => {
//   const requests = [
//     {
//       id: 1,
//       name: "John Martin",
//       contact: "providerrequest@gmail.com +96213105164",
//       category: "Electricity",
//       subcategory: "wirting",
//       providers: "120",
//       rejected: "12-08-2024",
//       city: "Miami",
//       image: notificationImg,
//     },
//     // ... add other request objects as needed
//   ];

//   return (
//     <div className="mt-4 overflow-x-auto">
//       <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
//         <thead>
//           {/* th k andar k heading to span tag mai dal k phr span ko padding aur
//           border de k dekhlain! */}
//           <tr className="bg-[#2B4DC9] text-white text-xs text-center">
//             <th className="p-3   text-center">
//               <span className="p-2 border-r border-gray-200 ">
//                 <input type="checkbox" className="h-4 w-4 rounded" />
//               </span>
//             </th>
//             <th className="p-3   text-center">
//               <span className="p-2 border-r border-gray-200">ID</span>
//             </th>
//             <th className="p-3   text-center">
//               <span className="p-2 border-r border-gray-200">Provider</span>
//             </th>
//             <th className="p-3   text-center">
//               <span className="p-2 border-r border-gray-200">Contact</span>
//             </th>
//             <th className="p-3   text-center">
//               <span className="p-2 border-r border-gray-200">Category</span>
//             </th>
//             <th className="p-3   text-center">
//               <span className="p-2 border-r border-gray-200">Sub-Category</span>
//             </th>
//             <th className="p-3   text-center">
//               <span className="p-2 border-r border-gray-200">Providers</span>
//             </th>
//             <th className="p-3   text-center">
//               <span className="p-2 border-r border-gray-200">Denied Date</span>
//             </th>
//             <th className="p-3   text-center">
//               <span className="p-2 border-r border-gray-200">City</span>
//             </th>
//             <th className="p-2 text-center">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {requests.map((request, index) => (
//             <tr key={request.id} className="border-b border-gray-200 text-sm">
//               <td className="p-3 text-center">
//                 <input type="checkbox" className="h-4 w-4 rounded" />
//               </td>
//               <td className="p-3 text-center">{`0${index + 1}`}</td>
//               <td className="p-3 text-center">
//                 <div className="flex items-center justify-center space-x-2">
//                   <img
//                     src={request.image}
//                     alt="Provider"
//                     className="w-8 h-8 rounded-full"
//                   />
//                   <span>{request.name}</span>
//                 </div>
//               </td>
//               <td className="p-3 text-center">{request.contact}</td>
//               <td className="p-3 text-center">{request.category}</td>
//               <td className="p-3 text-center">{request.subcategory}</td>
//               <td className="p-3 text-center">{request.providers}</td>
//               <td className="p-3 text-center">{request.rejected}</td>
//               <td className="p-3 text-center">{request.city}</td>
//               <td className="p-3 text-center">
//                 <BsThreeDots className="h-6 w-6 text-gray-600 mx-auto" />
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default OnboardTable;

import React from "react";
import { BsThreeDots } from "react-icons/bs";
import notificationImg from "../Assets/notificationImg.png";

const OnboardTable = () => {
  const requests = [
    {
      id: 1,
      name: "John Martin",
      contact: "providerrequest@gmail.com +96213105164",
      category: "Electricity",
      subcategory: "wirting",
      providers: "120",
      rejected: "12-08-2024",
      city: "Miami",
      image: notificationImg,
    },
    {
      id: 2,
      name: "John Martin",
      contact: "providerrequest@gmail.com +96213105164",
      category: "Electricity",
      subcategory: "wirting",
      providers: "120",
      rejected: "12-08-2024",
      city: "Miami",
      image: notificationImg,
    },
    {
      id: 3,
      name: "John Martin",
      contact: "providerrequest@gmail.com +96213105164",
      category: "Electricity",
      subcategory: "wirting",
      providers: "120",
      rejected: "12-08-2024",
      city: "Miami",
      image: notificationImg,
    },
    {
      id: 4,
      name: "John Martin",
      contact: "providerrequest@gmail.com +96213105164",
      category: "Electricity",
      subcategory: "wirting",
      providers: "120",
      rejected: "12-08-2024",
      city: "Miami",
      image: notificationImg,
    },
    {
      id: 5,
      name: "John Martin",
      contact: "providerrequest@gmail.com +96213105164",
      category: "Electricity",
      subcategory: "wirting",
      providers: "120",
      rejected: "12-08-2024",
      city: "Miami",
      image: notificationImg,
    },
    {
      id: 6,
      name: "John Martin",
      contact: "providerrequest@gmail.com +96213105164",
      category: "Electricity",
      subcategory: "wirting",
      providers: "120",
      rejected: "12-08-2024",
      city: "Miami",
      image: notificationImg,
    },
    {
      id: 7,
      name: "John Martin",
      contact: "providerrequest@gmail.com +96213105164",
      category: "Electricity",
      subcategory: "wirting",
      providers: "120",
      rejected: "12-08-2024",
      city: "Miami",
      image: notificationImg,
    },
  ];

  return (
    <div className="mt-4 overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
        <thead>
          <tr className="bg-[#8498E0] text-white text-xs text-center">
            <th className="p-3 ">
              <span className="block py-2 px-3 border-r border-gray-300">
                <input type="checkbox" className="h-4 w-4 rounded" />
              </span>
            </th>
            <th className="p-0 ">
              <span className="block py-2 px-3 border-r border-gray-300">
                ID
              </span>
            </th>
            <th className="p-0 ">
              <span className="block py-2 px-3 border-r border-gray-300">
                Provider
              </span>
            </th>
            <th className="p-0 ">
              <span className="block py-2 px-3 border-r border-gray-300">
                Contact
              </span>
            </th>
            <th className="p-0 ">
              <span className="block py-2 px-3 border-r border-gray-300">
                Category
              </span>
            </th>
            <th className="p-0 ">
              <span className="block py-2 px-3 border-r border-gray-300">
                Sub-Category
              </span>
            </th>
            <th className="p-0 ">
              <span className="block py-2 px-3 border-r border-gray-300">
                Providers
              </span>
            </th>
            <th className="p-0 ">
              <span className="block py-2 px-3 border-r border-gray-300">
                Denied Date
              </span>
            </th>
            <th className="p-0 ">
              <span className="block py-2 px-3 border-r border-gray-300">
                City
              </span>
            </th>
            <th className="p-0">
              <span className="block py-2 px-3">Actions</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {requests.map((request, index) => (
            <tr key={request.id} className="border-b  border-gray-200 text-sm">
              <td className="p-3 text-center">
                <input type="checkbox" className="h-4 w-4 rounded" />
              </td>
              <td className="p-3 text-center">{`0${index + 1}`}</td>
              <td className="p-3 text-center">
                <div className="flex items-center justify-center space-x-2">
                  <img
                    src={request.image}
                    alt="Provider"
                    className="w-8 h-8 rounded-full"
                  />
                  <span>{request.name}</span>
                </div>
              </td>
              <td className="p-3 text-center ">{request.contact}</td>
              <td className="p-3 text-center">{request.category}</td>
              <td className="p-3 text-center">{request.subcategory}</td>
              <td className="p-3 text-center">{request.providers}</td>
              <td className="p-3 text-center">{request.rejected}</td>
              <td className="p-3 text-center">{request.city}</td>
              <td className="p-3 text-center">
                <BsThreeDots className="h-6 w-6 text-gray-600 mx-auto" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OnboardTable;
