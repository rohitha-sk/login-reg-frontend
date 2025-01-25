import React, { useState } from 'react';
import { FaUserCircle, FaSignOutAlt } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';

function HomePage() {
    const location = useLocation();
    const navigate = useNavigate();
    const userEmail = location.state?.email || "Unknown";
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        console.log("User logged out");

        // Redirect to the login page 
        navigate('/', { state: { successMessage: "You have logged out successfully!" } });
    };

    return (
        <div
            className="min-h-screen bg-cover bg-center"
            style={{
                backgroundImage: "linear-gradient(to right, #d9f4ff, #ffffff)", // Light blue to white gradient
            }}
        >
            {/* Top Navbar */}
            <nav className="bg-blue-600 p-4">
                <div className="flex justify-between items-center">
                    <h1 className="text-white text-xl">You are Welcome</h1>

                    {/* Dropdown */}
                    <div className="relative">
                        {userEmail}
                        <button
                            className="text-white"
                            onClick={() => setDropdownVisible(!dropdownVisible)}
                        >
                            <FaUserCircle className="text-2xl" />
                        </button>

                        {dropdownVisible && (
                            <div className="absolute right-0 mt-2 w-40 bg-white text-gray-800 rounded-md shadow-lg">
                                <ul className="py-2">
                                    {/* Profile Option */}
                                    <li>
                                        <button
                                            className="flex items-center gap-2 px-4 py-2 w-full text-left hover:bg-gray-100"
                                            onClick={() => alert('Go to Profile')}
                                        >
                                            <FaUserCircle className="text-lg" />
                                            <span>Profile</span>
                                        </button>
                                    </li>
                                    <hr className="border-gray-200 my-1" />
                                    {/* Logout Option */}
                                    <li>
                                        <button
                                            className="flex items-center gap-2 px-4 py-2 w-full text-left hover:bg-gray-100"
                                            onClick={handleLogout}
                                        >
                                            <FaSignOutAlt className="text-lg" />
                                            <span>Logout</span>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <div className="p-8">
                <h1 className="text-2xl font-bold">WELCOME TO CUSTOMER HOME PAGE!</h1>
            </div>

            
            <div className="p-8">
    {/* Single Card */}
    <div className="bg-white rounded-lg shadow-md p-4">
        <h2 className="text-xl font-bold">Heading</h2>
        <p className="text-gray-600 mt-2">Content</p>
    </div>
</div>

        </div>
    );
}

export default HomePage;
