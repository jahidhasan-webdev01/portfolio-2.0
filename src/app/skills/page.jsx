import { Badge } from "@/components/ui/badge";

const SkillsPage = () => {
    return (
        <div className="relative border-l border-border pl-10 space-y-10">

            {/* Timeline Dot */}
            <div className="absolute -left-[7px] h-3 w-3 rounded-full bg-cyan-400" />

            <div>
                <h3 className="text-2xl font-bold mb-6">
                    Mobile Application Development
                </h3>

                <div className="space-y-8">

                    {/* Section */}
                    <div>
                        <h4 className="font-semibold mb-4">
                            Frameworks / Languages
                        </h4>

                        <div className="flex flex-wrap gap-3">
                            <Badge>Flutter</Badge>
                            <Badge>Dart</Badge>
                            <Badge>Kotlin</Badge>
                            <Badge>JavaScript</Badge>
                        </div>
                    </div>

                    {/* Section */}
                    <div>
                        <h4 className="font-semibold mb-4">
                            State Management
                        </h4>

                        <div className="flex flex-wrap gap-3">
                            <Badge>Provider</Badge>
                            <Badge>BLoC</Badge>
                            <Badge>Riverpod</Badge>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SkillsPage;