import React, { useEffect, useState } from "react";

import useAuthHook from "../hooks/useAuthHook"

const TableArea = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const token = user.token;
      const {eurl}=useAuthHook()
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
const domain="https://url-short-api-v2.vercel.app/"

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://url-short-api-v2.vercel.app/api/v1/profile",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Fetch error:", error);
        setError("Failed to load data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [eurl]);
  const apidata=data.user
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = apidata?.slice(indexOfFirstItem, indexOfLastItem);
console.log(currentItems)
  const totalPages = Math.ceil(data.user?.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const copyToClipboard = (url) => {
    navigator.clipboard
      .writeText(url)
      .then(() => alert("URL copied to clipboard!"))
      .catch((error) => console.error("Failed to copy URL:", error));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

 return (
   <>
       <div className="bg-secondary font-bold py-2 ">
         <h1 className="text-steal font-bold text-center text-4xl md:text-5xl">
           MY Links
         </h1>
       </div>
       <div className="p-4 bg-secondary flex justify-center">
         <div className="overflow-x-auto w-full md:w-auto">
           <table className="w-full h-full md:w-auto bg-white border border-b-2 border-gray-200 hidden md:table">
             <thead className="bg-sorange text-primary border-b-2 border-gray-200">
               <tr>
                 <th className="py-3 px-4 border-r-2 border-gray-200">No.</th>
                 <th className="py-3 px-1 text-wrap border-r-2 border-gray-200">
                   Link
                 </th>
                 <th className="py-3 px-4  text-wrap border-r-2 border-gray-200">
                   Shorten Link
                 </th>
                 <th className="py-3 px-4 border-r-2 border-gray-200">
                   Clicks
                 </th>
                 <th className="py-3 px-4 border-r-2 border-gray-200">Date</th>
                 <th className="py-3 px-4 border-r-2 border-gray-200">
                   Action
                 </th>
               </tr>
             </thead>
             <tbody className="text-center">
               {currentItems.map((item, index) => (
                 <tr
                   key={index}
                   className="hover:bg-gray-100 border-b text-wrap">
                   <td>{index + 1}</td>
                   <td className="py-3 w-1 px-2 border-r-2 text-sm font-bold border-gray-200 text-primary">
                     {item.url}
                   </td>
                   <td className="py-3 px-4 border-r-2 border-gray-200">
                     <a
                       href={`${domain}${item.shortId}`}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="text-primary hover:underline">
                       {`${domain}${item.shortId}`}
                     </a>
                   </td>
                   <td className="py-3 px-4 border-r-2 border-gray-200">
                     {item.clickCount || 0}
                   </td>
                   <td className="py-3 px-4 border-r-2 border-gray-200 text-primary">
                     {new Date(item.createdAt).toLocaleDateString()}
                   </td>
                   <td className="py-3 px-4 text-center border-b border-gray-200">
                     <button
                       onClick={() =>
                         copyToClipboard(`${domain}${item.shortId}`)
                       }
                       className="bg-secondary text-primary text-sm font-semibold py-2 px-4 hover:bg-steal rounded">
                       Copy Link
                     </button>
                   </td>
                 </tr>
               ))}
             </tbody>
           </table>

           {/* Mobile view */}
           <div className="block md:hidden">
             {currentItems.map((item, index) => (
               <div
                 key={index}
                 className="bg-white border border-gray-200 w-full mb-4 p-4 rounded shadow">
                 <div className="flex flex-col">
                   <div className="font-bold text-sorange">{item.url}</div>
                   <a
                     href={`${domain}${item.shortId}`}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="text-sorange hover:underline">
                     {`${domain}${item.shortId}`}
                   </a>
                   <div className="text-gray-600">
                     Clicks: {item.clickCount || 0}
                   </div>
                   <div className="text-gray-600">
                     Date: {new Date(item.createdAt).toLocaleDateString()}
                   </div>
                   <div className="text-center">
                     <button
                       onClick={() =>
                         copyToClipboard(`${domain}${item.shortId}`)
                       }
                       className="bg-secondary text-sorange text-md font-bold w-full py-2 rounded mt-2 hover:bg-steal">
                       Copy Link
                     </button>
                   </div>
                 </div>
               </div>
             ))}
           </div>

           {/* Pagination Controls */}
           <div className="flex justify-center items-center mt-4">
             <button
               onClick={() => handlePageChange(currentPage - 1)}
               disabled={currentPage === 1}
               className="bg-primary hover:bg-steal text-white px-5 py-2 mx-2 rounded disabled:opacity-50">
               Previous
             </button>
             <span className="mx-2 text-center text-primary text-md bg-white py-2 px-4 rounded-sm border border-black">
               Page {currentPage} of {totalPages}
             </span>
             <button
               onClick={() => handlePageChange(currentPage + 1)}
               disabled={currentPage === totalPages || NaN}
               className="bg-primary hover:bg-steal text-white px-5 py-2 mx-2 rounded disabled:opacity-50">
               Next
             </button>
           </div>
         </div>
       </div>
   </>
 );

};

export default TableArea;
