const Heading = ({ subtitle, title }) => {
    return (
        <div className="text-center">
            <p className="text-xs uppercase tracking-[0.25em] font-bold text-secondary">
                _{subtitle}
            </p>

            <h2 className="text-3xl font-bold text-primary">
                {title}
            </h2>
        </div>
    );
};

export default Heading;