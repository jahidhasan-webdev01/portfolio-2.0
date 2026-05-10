import Link from "next/link";

const NavLink = ({ nav }) => {
    const { path, name } = nav;
    return (
        <>
            <Link href={path} className="hover:border-b border-black dark:border-white text-sm">
                {name}
            </Link>
        </>
    );
};

export default NavLink;