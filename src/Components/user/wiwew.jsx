import React, { useState } from "react";
import url from "../../api";
const viwewCom = ({ item }) => {
  // ... (other existing code)

  // Function to handle reading user information
  const readUserData = () => {
    // Implement the code to fetch and display user information
    // For example, you can fetch user data from the server and display it in a modal or another section of the UI
    // You can use a state variable to store the user data and conditionally render it when the "Read" button is clicked
    // You may create a new state variable to hold the user information, e.g., const [userDetails, setUserDetails] = useState(null);
    // When the "Read" button is clicked, fetch the user information and update the state variable (setUserDetails)
    // Then display the user information in the UI based on the userDetails state

    // Example: Fetch user data from the server
    fetch(`${url}custom-users/${userInfo.id}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        // Update the state with the fetched user information
        // setUserDetails(data);
        // You can then display the userDetails in your UI
      });
  };

  return (
    <div>
      {/* ... (other existing code) */}
      <button
        onClick={readUserData}
        type="button"
        className="text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-400 dark:hover:bg-green-500 dark:focus:ring-green-600"
      >
        Read
      </button>
      {/* ... (other existing code) */}
    </div>
  );
};

export default viwewCom;