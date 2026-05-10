import { Button } from "@/components/ui/button";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";

const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            <h1 className="text-xl">404</h1>
            <h1>This is an invalid route!</h1>

            <Link href={"/"}>
                <Button variant="outline" className="mt-5 cursor-pointer">
                    <IoIosArrowBack /> back to home
                </Button>
            </Link>
        </div>
    );
};

export default NotFound;