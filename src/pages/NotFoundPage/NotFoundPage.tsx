import {FC} from "react";
import {Link} from "react-router-dom";

export const NotFoundPage: FC = () => {
    return (
        <>
            <div className="w-full h-full bg-main-1 flex justify-center items-center flex-col  uppercase">
                <span className="text-main-4 text-xl font-semibold">Sorry, this page is not found</span>
                <Link to="/" className="text-main-5 text-lg font-semibold">To main page</Link>
            </div>
        </>
    );
};