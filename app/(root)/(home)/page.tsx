"use client";
import MeetingTypeList from "@/components/MeetingTypeList";
import React, { useState } from "react";

const Home = () => {
  const [time, setTime] = useState<string>();
  const [date, setDate] = useState<string>();
  setInterval(() => {
    const now = new Date();
    const offset = now.getTimezoneOffset();
    var ISTOffset = 330;
    const localTime = new Date(now.getTime() + (offset + ISTOffset) * 60000);

    const time = localTime.toLocaleTimeString("en-in", {
      hour: "2-digit",
      minute: "2-digit",
    });
    const date = new Intl.DateTimeFormat("en-US", {
      dateStyle: "full",
    }).format(localTime);
    setTime(time);
    setDate(date);
  }, 60 * 1000);

  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <div className="h-[300px] w-full rounded-[20px] bg-hero bg-cover">
        <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
          <h2 className="glassmorphism max-w-[270px] rounded py-2 text-center text-base fount-normal">
            Upcoming Meeting at: 12:30 PM
          </h2>
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold lg:text-7xl">{time}</h1>
            <p className="text-lg font-medium text-sky-1 lg:text-2xl">{date}</p>
          </div>
        </div>
      </div>
      <MeetingTypeList />
    </section>
  );
};

export default Home;
