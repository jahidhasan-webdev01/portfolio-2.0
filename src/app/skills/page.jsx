import Heading from "@/components/ui/Heading";
import { CalendarDays, GraduationCap } from "lucide-react";




const SkillsPage = () => {
  const education = [
  { id: 1, side: "left",  title: "B.Sc in Computer Science",        institution: "East West University",  date: "2021 – Present" },
  { id: 2, side: "right", title: "Higher Secondary Certificate (HSC)", institution: "Science — DHAKA Board", date: "2018 – 2020" },
  { id: 3, side: "left",  title: "Secondary School Certificate (SSC)", institution: "Science — DHAKA Board", date: "2016 – 2018" },
  { id: 4, side: "right", title: "Junior School Certificate (JSC)",    institution: "Science — DHAKA Board", date: "2014 – 2016" },
];
    return (
       <div className="py-10 max-w-xl mx-auto">
  <Heading subtitle="My personal journey" title="Qualification" />

  <div className="flex justify-center mt-8 mb-10">
    <div className="flex items-center gap-2 px-5 py-2 rounded-full border border-border text-sm font-medium">
      <GraduationCap className="w-4 h-4" /> Education
    </div>
  </div>

  {/* Timeline */}
  <div className="relative flex flex-col">
    {/* center line */}
    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

    {education.map((item, index) => (
      <div key={item.id} className="grid grid-cols-[1fr_20px_1fr] items-start mb-8 relative">

        {/* Left content */}
        {item.side === "left" ? (
          <div className="text-right pr-5">
            <h3 className="text-sm font-semibold text-foreground mb-0.5">{item.title}</h3>
            <p className="text-xs text-muted-foreground mb-1">{item.institution}</p>
            <span className="inline-flex items-center gap-1 text-xs text-muted-foreground/60">
              <CalendarDays className="w-3 h-3" /> {item.date}
            </span>
          </div>
        ) : <div />}

        {/* Dot */}
        <div className="flex justify-center pt-1 z-10">
          <div className={`w-2.5 h-2.5 rounded-full border-2 border-background ring-1 ring-border ${
            index === 0 ? "bg-foreground" : "bg-muted-foreground"
          }`} />
        </div>

        {/* Right content */}
        {item.side === "right" ? (
          <div className="text-left pl-5">
            <h3 className="text-sm font-semibold text-foreground mb-0.5">{item.title}</h3>
            <p className="text-xs text-muted-foreground mb-1">{item.institution}</p>
            <span className="inline-flex items-center gap-1 text-xs text-muted-foreground/60">
              <CalendarDays className="w-3 h-3" /> {item.date}
            </span>
          </div>
        ) : <div />}

      </div>
    ))}
  </div>
</div>
    );
};

export default SkillsPage;