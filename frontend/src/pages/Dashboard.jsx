import { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import AdminDashboard from './AdminDashboard';
import TeacherDashboard from './TeacherDashboard';
import StudentDashboard from './StudentDashboard';
import { LogOut } from 'lucide-react';

const Dashboard = () => {
    const { user, logout } = useContext(AuthContext);

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <div className="w-64 bg-white shadow-md">
                <div className="p-6 border-b">
                    <h1 className="text-2xl font-bold text-blue-600">SCMS</h1>
                    <p className="text-sm text-gray-500 capitalize">{user.role} Portal</p>
                </div>
                <nav className="mt-6">
                    <a href="#" className="flex items-center px-6 py-3 bg-blue-50 text-blue-600 border-r-4 border-blue-600">
                        <span className="mx-3">Dashboard</span>
                    </a>
                    {/* Add more links based on role later */}
                </nav>
                <div className="absolute bottom-0 w-64 p-4 border-t">
                    <button
                        onClick={logout}
                        className="flex items-center w-full px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
                    >
                        <LogOut size={20} />
                        <span className="mx-3">Logout</span>
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 overflow-y-auto">
                <header className="bg-white shadow-sm p-4 flex justify-between items-center">
                    <h2 className="text-xl font-semibold text-gray-800">Welcome, {user.name}</h2>
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                        {user.name.charAt(0)}
                    </div>
                </header>

                <main className="p-6">
                    {user.role === 'admin' && <AdminDashboard />}
                    {user.role === 'teacher' && <TeacherDashboard />}
                    {user.role === 'student' && <StudentDashboard />}
                </main>
            </div>
        </div>
    );
};

export default Dashboard;
