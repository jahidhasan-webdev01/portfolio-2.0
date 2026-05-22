const NavLink = ({ nav }) => {
    const { path, name } = nav;
    return (
        <>
            <a href={path} className="hover:border-b border-black dark:border-white text-sm">
                {name}
            </a>
        </>
    );
};

export default NavLink;