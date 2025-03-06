import { CheckCircle2 } from "lucide-react";
import CodeImg from "../assets/code.jpg";
import { checklistItems } from "../constants/constants";
const WorkFlow = () => {
  return (
    <section>
      <div className="container mt-20 border-b border-neutral-800">
        <h2 className=" text-3xl sm:text-5xl lg:text-6xl text-center">
          Accelerate your{" "}
          <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
            coding workflow
          </span>
        </h2>
        <div className="flex flex-wrap">
          <div className="p-2 mt-12 w-full lg:w-1/2">
            <img src={CodeImg} alt="code image" />
          </div>
          <div className="pt-12 w-full lg:w-1/2">
            {checklistItems.map((item, index) => (
              <div key={index} className="flex mb-12">
                <div className="flex">
                  <div className="h-10 aspect-square rounded-full mx-6 p-2 bg-neutral-900 text-orange-700 flex justify-center items-center">
                    <CheckCircle2 color="lime" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2 mt-1">{item.title}</h3>
                    <p className="p-2  text-md text-neutral-500">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkFlow;
