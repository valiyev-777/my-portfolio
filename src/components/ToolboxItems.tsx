import { Techicon } from "@/components/techIcon";
import { Fragment } from "react";
import { twMerge } from "tailwind-merge";
export const ToolboxItems = ({
  itmes,
  className,
  itmesWrapperClassName,
}: {
  itmes: {
    title: string;
    iconType: React.ElementType;
  }[];
  className?: string;
  itmesWrapperClassName?: string;
}) => {
  return (
    <div
      className={twMerge(
        "flex  [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className
      )}
    >
      <div
        className={twMerge(
          "flex flex-none py-0.5 gap-6 pr-6",
          itmesWrapperClassName
        )}
      >
        {[...new Array(2)].fill(0).map((_, idx) => (
          <Fragment key={idx}>
            {itmes.map((item) => (
              <div
                key={item.title}
                className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg"
              >
                <Techicon component={item.iconType} />
                <span className="font-semibold"> {item.title}</span>
              </div>
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  );
};
