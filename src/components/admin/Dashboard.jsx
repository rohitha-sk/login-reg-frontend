import React, { useState } from 'react';
import { FaSignOutAlt, FaUserCircle, FaChevronDown } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';

function Dashboard() {
    const location = useLocation();
    // Default to "Unknown" if email is not passed
    const userEmail = location.state?.email || "Unknown"; 
    const navigate = useNavigate();  
    // State to manage dropdown visibility
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleLogout = () => {
        // Clear the token from localStorage
        localStorage.removeItem('authToken');
        console.log("User logged out");

        // Redirect to the login page 
        navigate('/', { state: { successMessage: "You have logged out successfully!" } });
    };

    return (
        <div className="h-screen flex flex-col">
            {/* Navbar */}
            <nav className="bg-blue-600 text-white p-4 flex justify-between items-center relative">
                <h1 className="text-xl font-bold">Dashboard</h1>
                {/* Profile and Dropdown */}
                <div className="relative">
                    <button
                        className="flex items-center gap-2 focus:outline-none"
                        onClick={toggleDropdown}
                    >
                        <FaUserCircle className="text-2xl" />
                        <span>{userEmail}</span>
                        <FaChevronDown className="text-sm" />
                    </button>
                    {/* Dropdown Menu */}
                    {isDropdownOpen && (
                        <div className="absolute right-0 mt-2 w-40 bg-white text-gray-800 rounded-md shadow-lg">
                            <ul className="py-2">
                                {/* Profile Option */}
                                <li>
                                    <button
                                        className="flex items-center gap-2 px-4 py-2 w-full text-left hover:bg-gray-100"
                                        onClick={() => alert("Go to Profile")}
                                    >
                                        <FaUserCircle className="text-lg" />
                                        <span>{userEmail}</span>
                                    </button>
                                </li>
                                <hr className="border-gray-200 my-1" />
                                {/* Logout Option */}
                                <li>
                                    <button
                                        className="flex items-center gap-2 px-4 py-2 w-full text-left hover:bg-gray-100"
                                        onClick={handleLogout}  // Call handleLogout on click
                                    >
                                        <FaSignOutAlt className="text-lg" />
                                        <span>Logout</span>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </nav>

            <div className="flex flex-grow">
                {/* Sidebar */}
                <aside className="w-64 bg-gray-800 text-white flex flex-col">
                    
                    <ul className="flex-grow p-4 space-y-2">
                        <li className="hover:bg-gray-700 px-3 py-2 rounded">
                            <a href="/admin-dashboard">Home</a>
                        </li>
                        <li className="hover:bg-gray-700 px-3 py-2 rounded">
                            <a href="/admin-dashboard">Profile</a>
                        </li>
                        <li className="hover:bg-gray-700 px-3 py-2 rounded">
                            <a href="/admin-dashboard">Settings</a>
                        </li>
                    </ul>
                </aside>

                {/* Main Content */}
                <main className="flex-grow bg-gray-100 p-6">
                    <h2 className="text-2xl font-bold mb-4">Welcome to the Admin Dashboard!</h2>
                    <p className="text-gray-700">
                       Admin Content Area
                    </p>
                </main>
            </div>
        </div>
    );
}

export default Dashboard;
