import {
    Lightbulb,
    ClipboardList,
    Brain,
    Code2,
    Search,
    FlaskConical,
    BookOpen,
} from "lucide-react";

import Heading from "../ui/Heading";
import WordflowStep from "../ui/WordflowStep";

const steps = [
    { label: "IDEA", Icon: Lightbulb },
    { label: "PLAN", Icon: ClipboardList },
    { label: "AI HELP", Icon: Brain },
    { label: "CODE", Icon: Code2 },
    { label: "REVIEW", Icon: Search },
    { label: "TEST", Icon: FlaskConical },
    { label: "LEARN", Icon: BookOpen },
];


export default function Workflow() {
    return (
        <section className="py-10">
            <Heading
                subtitle="the process i follow"
                title="Workflow"
            />

            <div className="overflow-x-auto mt-5 py-5">
                <div className="flex items-center min-w-max sm:min-w-0 sm:w-full px-2">
                    {steps.map((step, index) => (
                        <WordflowStep
                            key={index}
                            step={step}
                            index={index}
                            total={steps.length}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}