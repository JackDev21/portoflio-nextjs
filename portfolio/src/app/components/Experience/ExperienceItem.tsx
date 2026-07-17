import { CalendarIcon } from "@radix-ui/react-icons"

import { Card, CardContent, CardHeader } from "@/components/ui/card"

interface ExperienceItemProps {
  startDate: string
  endDate: string
  jobTitle: string
  company: string
  description: string[]
  isLeft: boolean
}

export function ExperienceItem({ startDate, endDate, jobTitle, company, description, isLeft }: ExperienceItemProps) {
  // Group consecutive list items for proper HTML list rendering
  const groupedParagraphs: { type: "p" | "ul"; items: string[] }[] = [];
  description.forEach((para) => {
    if (para.startsWith("- ")) {
      const cleanItem = para.replace(/^-\s*/, "")
      const lastGroup = groupedParagraphs[groupedParagraphs.length - 1]
      if (lastGroup && lastGroup.type === "ul") {
        lastGroup.items.push(cleanItem)
      } else {
        groupedParagraphs.push({ type: "ul", items: [cleanItem] })
      }
    } else {
      groupedParagraphs.push({ type: "p", items: [para] })
    }
  });

  return (
    <div
      className={`mb-10 flex w-full flex-col md:flex-row items-center justify-center relative ${isLeft ? "md:flex-row-reverse" : ""
        }`}
    >
      {/* Spacer for desktop layout */}
      <div className="hidden md:block w-5/12"></div>

      {/* Centered date bubble */}
      <div className="z-20 md:absolute md:left-1/2 md:-translate-x-1/2 flex items-center justify-center rounded-full bg-primary px-3 py-1 shadow-xl mb-4 md:mb-0">
        <h1 className="text-sm font-bold text-primary-foreground">
          {startDate.split("-")[0]}
        </h1>
      </div>

      {/* Card containing experience details */}
      <Card className={`w-full md:w-5/12 px-4 py-4 ${isLeft ? "md:mr-auto" : "md:ml-auto"}`}>
        <CardHeader className="mb-2 p-0">
          <div className="mb-1 flex items-center text-sm text-muted-foreground">
            <CalendarIcon className="mr-2 h-4 w-4" />
            <time dateTime={startDate}>{startDate}</time>
            <span className="mx-2">-</span>
            <time dateTime={endDate}>{endDate}</time>
          </div>
          <h3 className="text-lg font-semibold">{jobTitle}</h3>
          <div className="text-sm font-medium text-muted-foreground">{company}</div>
        </CardHeader>
        <CardContent className="p-0">
          {groupedParagraphs.map((group, gIdx) => {
            if (group.type === "ul") {
              return (
                <ul key={gIdx} className="list-disc pl-5 mb-3 space-y-1">
                  {group.items.map((item, iIdx) => (
                    <li
                      key={iIdx}
                      className="text-sm text-muted-foreground"
                      dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }}
                    />
                  ))}
                </ul>
              )
            } else {
              return (
                <p
                  key={gIdx}
                  className="mb-2 text-sm text-muted-foreground"
                  dangerouslySetInnerHTML={{ __html: group.items[0].replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }}
                />
              );
            }
          })}
        </CardContent>
      </Card>
    </div>
  )
}
