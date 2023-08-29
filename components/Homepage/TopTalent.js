import React from "react";
import Image from "next/image";
import result from "../../public/assets/homepage/hire/result.png";
import helpdesk from "../../public/assets/homepage/hire/helpdesk.png";
import attendance from "../../public/assets/homepage/hire/attendance.png";
import trust from "../../public/assets/homepage/hire/trust.png";
import vector1 from "../../public/assets/homepage/hire/vector1.png";
import vector2 from "../../public/assets/homepage/hire/vector2.png";

function TopTalent() {
  return (
    <>
      <div className="xsm:px-5 sm:px-5 md:px-5 px-40">
        <div className="py-5">
          <div className="text-center pb-5">
            <p className="font-medium text-lap_black text-4xl mb-4">
              Need Hiring Top Talent?
            </p>
            <p className="text-lg text-lap_gray_light font-regular">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitant
              massa cursus in <br />
              magnis volutpat iaculis velit aliquet. Nunc ultrices lacinia
            </p>
          </div>
          <div className="grid grid-cols-4 xsm:grid-cols-2 gap-4">
            <div className="flex flex-col mx-auto text-center">
              <Image
                src={result}
                alt="result.png"
                className="w-auto h-8 mx-auto mb-3"
              />
              <p className="text-base text-lap_gray_light font-regular mb-3">
                Step 1
              </p>
              <p className="text-lg text-lap_black font-medium mb-3">
                Post a Job
              </p>
              <p className="text-base text-lap_gray_light font-regular">
                It’s free and easy to post a job. Simply fill in a title,
                description and budget about your project.about your project.
              </p>
            </div>
            <div className="flex flex-col mx-auto text-center">
              <Image
                src={helpdesk}
                alt="helpdesk.png"
                className="w-auto h-8 mx-auto mb-3"
              />
              <p className="text-base text-lap_gray_light font-regular mb-3">
                Step 2
              </p>
              <p className="text-lg text-lap_black font-medium mb-3">
                Industry Experts
              </p>
              <p className="text-base text-lap_gray_light font-regular">
                An expert on our team will work with you to understand your
                goals, technical needs, and team dynamics.
              </p>
            </div>
            <div className="flex flex-col mx-auto text-center">
              <Image
                src={attendance}
                alt="attendance.png"
                className="w-auto h-8 mx-auto mb-3"
              />
              <p className="text-base text-lap_gray_light font-regular mb-3">
                Step 3
              </p>
              <p className="text-lg text-lap_black font-medium mb-3">
                Selected Talent
              </p>
              <p className="text-base text-lap_gray_light font-regular">
                Within days, we'll introduce right talent for your project.
                Average time to match is under 24 hours.
              </p>
            </div>
            <div className="flex flex-col mx-auto text-center">
              <Image
                src={helpdesk}
                alt="helpdesk.png"
                className="w-auto h-8 mx-auto mb-3"
              />
              <p className="text-base text-lap_gray_light font-regular mb-3">
                Step 4
              </p>
              <p className="text-lg text-lap_black font-medium mb-3">
                Completed Task
              </p>
              <p className="text-base text-lap_gray_light font-regular">
                Work with your new team member on a trial basis (pay only if
                satisfied), ensuring you hire the right people for the job.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopTalent;
