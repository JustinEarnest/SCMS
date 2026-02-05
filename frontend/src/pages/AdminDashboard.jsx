import { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import AuthContext from '../context/AuthContext';

const AdminDashboard = () => {
    const { user } = useContext(AuthContext);
    const [showModal, setShowModal] = useState(false);
    const [users, setUsers] = useState([]);
    const [filters, setFilters] = useState({ role: 'all', search: '' });
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        role: 'student'
    });
    const [message, setMessage] = useState(null);

    useEffect(() => {
        fetchUsers();
    }, [filters]);

    const fetchUsers = async () => {
        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${user.token}`,
                },
                params: {
                    role: filters.role,
                    search: filters.search
                }
            };
            const { data } = await axios.get('http://localhost:5000/api/users', config);
            setUsers(data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFilterChange = (e) => {
        setFilters({ ...filters, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${user.token}`,
                },
            };
            await axios.post('http://localhost:5000/api/users', formData, config);
            setMessage({ type: 'success', text: 'User added successfully!' });
            setFormData({ name: '', email: '', password: '', role: 'student' });
            fetchUsers(); // Refresh list
            setTimeout(() => setShowModal(false), 2000);
        } catch (error) {
            setMessage({ type: 'error', text: error.response?.data?.message || 'Error adding user' });
        }
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {/* Stats Cards */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-gray-500 text-sm font-medium">Total Users</h3>
                <p className="text-3xl font-bold text-gray-800 mt-2">{users.length}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-gray-500 text-sm font-medium">Admin</h3>
                <p className="text-3xl font-bold text-gray-800 mt-2">{users.filter(u => u.role === 'admin').length}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-gray-500 text-sm font-medium">Teachers/Students</h3>
                <p className="text-3xl font-bold text-gray-800 mt-2">{users.filter(u => u.role !== 'admin').length}</p>
            </div>

            {/* Action Buttons */}
            <div className="col-span-1 md:col-span-3 bg-white p-6 rounded-lg shadow-sm border border-gray-200 mt-6">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold text-gray-800">Quick Actions</h3>
                    <div className="flex gap-4">
                        <button
                            onClick={() => setShowModal(true)}
                            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                        >
                            Add User
                        </button>
                    </div>
                </div>
            </div>

            {/* Filter Section */}
            <div className="col-span-1 md:col-span-3 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">User Management</h3>
                <div className="flex gap-4 mb-4">
                    <select
                        name="role"
                        value={filters.role}
                        onChange={handleFilterChange}
                        className="border p-2 rounded"
                    >
                        <option value="all">All Roles</option>
                        <option value="student">Student</option>
                        <option value="teacher">Teacher</option>
                        <option value="admin">Admin</option>
                    </select>
                    <input
                        type="text"
                        name="search"
                        value={filters.search}
                        onChange={handleFilterChange}
                        placeholder="Search by name or email..."
                        className="border p-2 rounded flex-1"
                    />
                </div>

                {/* User Table */}
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200">
                        <thead>
                            <tr className="bg-gray-50 border-b">
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {users.map((u) => (
                                <tr key={u._id}>
                                    <td className="px-6 py-4 whitespace-nowrap">{u.name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{u.email}</td>
                                    <td className="px-6 py-4 whitespace-nowrap capitalize">
                                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${u.role === 'admin' ? 'bg-red-100 text-red-800' :
                                                u.role === 'teacher' ? 'bg-yellow-100 text-yellow-800' :
                                                    'bg-green-100 text-green-800'
                                            }`}>
                                            {u.role}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {users.length === 0 && <p className="text-center text-gray-500 mt-4">No users found.</p>}
                </div>
            </div>

            {/* Add User Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-lg p-6 w-full max-w-md">
                        <h2 className="text-xl font-bold mb-4">Add New User</h2>
                        {message && (
                            <div className={`p-2 mb-4 rounded ${message.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                {message.text}
                            </div>
                        )}
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Name</label>
                                <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full border p-2 rounded" required />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Email</label>
                                <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full border p-2 rounded" required />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Password</label>
                                <input type="password" name="password" value={formData.password} onChange={handleChange} className="w-full border p-2 rounded" required />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Role</label>
                                <select name="role" value={formData.role} onChange={handleChange} className="w-full border p-2 rounded">
                                    <option value="student">Student</option>
                                    <option value="teacher">Teacher</option>
                                    <option value="admin">Admin</option>
                                </select>
                            </div>
                            <div className="flex justify-end gap-2">
                                <button type="button" onClick={() => setShowModal(false)} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">Cancel</button>
                                <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminDashboard;
