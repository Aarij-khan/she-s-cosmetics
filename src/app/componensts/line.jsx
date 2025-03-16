import {
  Timeline,
  TimelineContent,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "@/components/ui/timeline";
import { Playfair_Display } from "next/font/google";

const items = [
    {
      id: 1,
      date: "1 days ago",
      title: "Ayesha Khan",
      action: "left a review",
      description:
        "The customer service at this cosmetics shop is amazing! The staff was very helpful in guiding me to the right skincare products.",
      image: "/pexel4.jpg",
    },
    {
      id: 2,
      date: "1 week ago",
      title: "Huma waleed",
      action: "left a review",
      description:
        "I agree with Ayesha! The customer service was excellent. They patiently helped me choose the perfect foundation shade.",
      image: "/pexel2.jpg",
    },
    {
      id: 3,
      date: "3 weeks ago",
      title: "Fatima Noor",
      action: "left a review",
      description:
        "If you're looking for high-quality cosmetics and top-notch customer service, this is the place to go! Their beauty advisors are so knowledgeable.",
      image: "/pexel3.jpg",
    },
    {
      id: 4,
      date: "2 year ago",
      title: "rafia Malik",
      action: "left a review",
      description: "Excellent service! The staff was very friendly and helped me pick the best skincare products for my skin type.",
      image: "/pexel1.jpg",
    },
  ];
  

  const playfair = Playfair_Display({ subsets: ["latin"], weight: "700" });
export default function Line() {

  return (
    <div className="py-10 flex flex-col bg-white justify-center items-center gap-10 ">
    <h1 className={`${playfair.className} text-4xl font-bold text-pink-600`}>Our reviews</h1>
      <Timeline className={"w-[45%] "}>
        {items.map((item) => (
          <TimelineItem
            key={item.id}
            step={item.id}
            className="group-data-[orientation=vertical]/timeline:ms-10 group-data-[orientation=vertical]/timeline:not-last:pb-8"
          >
            <TimelineHeader>
              <TimelineSeparator className="group-data-[orientation=vertical]/timeline:-left-7 group-data-[orientation=vertical]/timeline:h-[calc(100%-1.5rem-0.25rem)] group-data-[orientation=vertical]/timeline:translate-y-6.5" />
              <TimelineTitle className="mt-0.5">
                {item.title}{" "}
                <span className="text-muted-foreground text-sm font-normal">
                  {item.action}
                </span>
              </TimelineTitle>
              <TimelineIndicator className="bg-primary/10 group-data-completed/timeline-item:bg-primary group-data-completed/timeline-item:text-primary-foreground flex size-6 items-center justify-center border-none group-data-[orientation=vertical]/timeline:-left-7">
                <img
                  src={item.image}
                  alt={item.title}
                  className="size-6 rounded-full"
                />
              </TimelineIndicator>
            </TimelineHeader>
            <TimelineContent className="text-foreground mt-2 rounded-lg border px-4 py-3 ">
              {item.description}
              <TimelineDate className="mt-1 mb-0">{item.date}</TimelineDate>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
}
