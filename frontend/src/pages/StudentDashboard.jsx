const StudentDashboard = () => {
    return (
        <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Academic Overview</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 bg-blue-50 rounded-lg">
                        <p className="text-sm text-blue-600">Overall Attendance</p>
                        <p className="text-2xl font-bold text-blue-800">87%</p>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg">
                        <p className="text-sm text-green-600">CGPA</p>
                        <p className="text-2xl font-bold text-green-800">8.4</p>
                    </div>
                </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Notices</h3>
                <div className="space-y-4">
                    <div className="border-l-4 border-blue-500 pl-4">
                        <h4 className="font-bold text-gray-800">Exam Schedule Released</h4>
                        <p className="text-sm text-gray-600">Final exams will start from 15th May. Check the schedule attached.</p>
                        <span className="text-xs text-gray-400">2 hours ago</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentDashboard;
