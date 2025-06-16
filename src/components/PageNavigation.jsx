import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const PageNavigation = ({ leftPath, leftLabel, rightPath, rightLabel }) => {
    return (
        <div className="flex justify-between items-center mt-12">
            <Link
                to={leftPath}
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#1e293b] hover:bg-[#334155] rounded-lg transition"
            >
                <FiArrowLeft className="w-5 h-5 text-yellow-400" />
                <span className="text-gray-300 text-sm font-medium">{leftLabel}</span>
            </Link>

            <Link
                to={rightPath}
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#0f766e] hover:bg-[#115e59] rounded-lg transition"
            >
                <span className="text-gray-300 text-sm font-medium">{rightLabel}</span>
                <FiArrowRight className="w-5 h-5 text-yellow-400" />
            </Link>
        </div>
    );
};

export default PageNavigation;
