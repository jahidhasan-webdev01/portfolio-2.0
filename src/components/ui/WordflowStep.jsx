
const WordflowStep = ({step, index, total}) => {
    const { label, Icon } = step;

    const isLast = index === total - 1;
    return (
        <div className="flex items-center flex-1 min-w-0">
            <div className="group flex flex-col items-center gap-2 shrink-0">
                <button
                    aria-label={label}
                    className="
                        relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl
                        flex items-center justify-center
                        bg-gray-50 border border-gray-300
                        dark:bg-transparent dark:border-blue-500/20
                        transition-all duration-300
                        hover:-translate-y-1 hover:scale-105
                        hover:border-primary/50
                        dark:hover:border-blue-500/50
                    "
                >
                    <span
                        className="
                            text-primary
                            transition-all duration-300
                            group-hover:scale-110
                        "
                    >
                        <Icon size={22} strokeWidth={2} />
                    </span>
                </button>

                <span
                    className="
                        text-xs tracking-widest text-secondary
                        transition-colors duration-300
                        group-hover:text-primary
                    "
                >
                    {label}
                </span>
            </div>

            {!isLast && (
                <div
                    className="
                        flex-1 h-px mx-2 sm:mx-3 min-w-2
                        bg-linear-to-r
                        from-gray-300
                        via-gray-400
                        to-gray-300
                        dark:from-gray-700
                        dark:via-gray-600
                        dark:to-gray-700
                    "
                />
            )}
        </div>
    );
};

export default WordflowStep;