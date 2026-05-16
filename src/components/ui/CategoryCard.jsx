const CategoryCard = ({ category }) => {
    const { title, CategoryIcon, skills } = category;
    return (
        <div
            className="group rounded-md border border-gray-300 bg-gray-50 dark:bg-transparent dark:border-blue-500/20 p-5
     dark:hover:border-blue-500/50 transition-all duration-300 cursor-default hover:shadow-lg"
        >
            <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                    <CategoryIcon />
                </div>
                <h3 className="font-semibold text-primary text-base">{title}</h3>
            </div>

            <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => {
                    const { name, Icon } = skill;
                    return <div
                        key={index}
                        className="
        flex items-center gap-1.5 px-3 py-1.5 rounded-full border
        border-secondary text-secondary text-sm
        transition-colors duration-300
        group-hover:border-primary group-hover:text-primary
    "
                    >
                        <span>
                            <Icon size={15} />
                        </span>

                        <span>{name}</span>
                    </div>
                })}
            </div>
        </div>
    );
};

export default CategoryCard;