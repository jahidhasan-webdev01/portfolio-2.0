const Heading = ({ subtitle, title }) => {
    return (
        <div className="text-center">
            <p className="text-secondary text-xs tracking-widest uppercase mb-3">
                _{subtitle}
            </p>

            <h2 className="text-3xl font-bold text-primary">
                {title}
            </h2>
        </div>
    );
};

export default Heading; 