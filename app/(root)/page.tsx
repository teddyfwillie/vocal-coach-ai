import InterviewCard from "@/components/InterviewCard";
import { Button } from "@/components/ui/button";
import { dummyInterviews } from "@/constants";
import { getCurrentUser } from "@/lib/actions/auth.action";
import {
  getInterviewsByUserId,
  getLatestInterviews,
} from "@/lib/actions/general.action";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = async () => {
  const user = await getCurrentUser();

  const [userInterViews, latestInterViews] = await Promise.all([
    await getInterviewsByUserId(user?.id!),
    await getLatestInterviews({ userId: user?.id! }),
  ]);

  const hasPassedInterviews = userInterViews?.length > 0;
  const hasUpcomingInterviews = latestInterViews?.length > 0;
  return (
    <>
      <section className="card-cta">
        <div className="flex flex-col gap-6 max-w-lg">
          <h2>Get Interview ready with Vocal Coach AI</h2>
          <p className="text-lg">
            Practice your interview skills with Vocal Coach AI and get instant
            feedback
          </p>
          <Button asChild className="btn-primary max-sm:w-full ">
            <Link href="/interviews">Get Started</Link>
          </Button>
        </div>
        <Image
          src="/robot.png"
          alt="Robot"
          width={400}
          height={400}
          className="max-sm:hidden"
        />
      </section>
      <section className="flex flex-col gap-6 mt-8">
        <h2>Your Interviews</h2>
        <div className="interviews-section">
          {hasPassedInterviews ? (
            userInterViews?.map((interview) => (
              <InterviewCard key={interview.id} {...interview} />
            ))
          ) : (
            <p className="text-center">There are no interviews yet</p>
          )}
        </div>
      </section>
      <section className="flex flex-col gap-6 mt-8">
        <h2>Get Feedback</h2>
        <div className="interviews-section">
          {hasUpcomingInterviews ? (
            latestInterViews?.map((interview) => (
              <InterviewCard key={interview.id} {...interview} />
            ))
          ) : (
            <p>There are no interviews yet</p>
          )}
        </div>
      </section>
    </>
  );
};

export default page;
