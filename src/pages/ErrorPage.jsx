const NotFoundPage = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-red-500">404</h1>
                <p className="text-xl mt-2">Page Not Found</p>
                <p className="text-sm text-gray-400 mt-1">
                    The page you are looking for doesn't exist or has been moved.
                </p>
            </div>
        </div>
    );
};

export default NotFoundPage;
