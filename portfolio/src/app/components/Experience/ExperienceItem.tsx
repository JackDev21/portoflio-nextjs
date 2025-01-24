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
  return (
    <div
      className={`mb-10 flex w-full items-center justify-center ${isLeft ? "left-timeline flex-row-reverse" : "right-timeline"} `}
    >
      <div className="order-1 w-5/12"></div>
      <div className="z-20 order-1 flex w-auto items-center rounded-full bg-primary p-1 shadow-xl">
        <h1 className="mx-auto text-lg font-semibold text-white dark:text-gray-900">{startDate.split("-")[0]}</h1>
      </div>
      <Card className={`order-1 ${isLeft ? "mr-auto" : "ml-auto"} w-[49%] px-4 py-4`}>
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
          {description.map((paragraph, index) => (
            <p key={index} className="mb-2 text-sm text-muted-foreground">
              {paragraph}
            </p>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
