const Heading = ({ subtitle, title }) => {
    return (
        <div className="text-center">
            <p className="text-xs uppercase tracking-[0.25em] text-primary">
                _{subtitle}
            </p>

            <h2 className="text-3xl font-bold">
                {title}
            </h2>
        </div>
    );
};

export default Heading;