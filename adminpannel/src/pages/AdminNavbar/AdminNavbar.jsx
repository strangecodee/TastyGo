import { logoutAdmin } from "";



const AdminNavbar = () => {
    return (
        <nav className="bg-gray-800 text-white px-4 py-3 flex justify-between items-center">
            <h1 className="text-lg font-semibold">TastyGo Admin Panel</h1>
            <button
                onClick={logoutAdmin}
                className="bg-red-500 px-4 py-1 rounded hover:bg-red-600"
            >
                Logout
            </button>
        </nav>
    );
};

export default AdminNavbar;
