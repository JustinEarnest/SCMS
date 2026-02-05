const TeacherDashboard = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">My Subjects</h3>
                <ul className="space-y-3">
                    <li className="flex justify-between items-center p-3 bg-gray-50 rounded">
                        <span>CS101 - Intro to Programming</span>
                        <span className="text-sm text-gray-500">Sem 1</span>
                    </li>
                    <li className="flex justify-between items-center p-3 bg-gray-50 rounded">
                        <span>CS202 - Data Structures</span>
                        <span className="text-sm text-gray-500">Sem 3</span>
                    </li>
                </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Pending Tasks</h3>
                <button className="w-full text-left p-3 bg-red-50 text-red-700 rounded mb-2 hover:bg-red-100">
                    Mark Attendance for CS101 (Today)
                </button>
                <button className="w-full text-left p-3 bg-yellow-50 text-yellow-700 rounded hover:bg-yellow-100">
                    Upload Marks for Midterm
                </button>
            </div>
        </div>
    );
};

export default TeacherDashboard;
