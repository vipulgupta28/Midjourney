"use client";

import { Tabs } from "../ui/tabs";

export function TabsDemo() {
  const tabs = [
    {
      title: "What?",
      value: "product",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>What is this platform about?</p>
          <p className="text-sm md:text-xl font-normal mt-4">
            This platform is designed to provide a space for users to ask questions,
            explore answers, and share knowledge across various domains. It fosters
            a community of learning, collaboration, and peer-to-peer support.
          </p>
        </div>
      ),
    },
    {
      title: "How?",
      value: "services",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>How can I contribute?</p>
          <p className="text-sm md:text-xl font-normal mt-4">
            You can contribute by answering questions, sharing helpful insights,
            submitting feedback, reporting issues, or even creating content that helps
            others understand complex topics more clearly.
          </p>
        </div>
      ),
    },
    {
      title: "Is?",
      value: "playground",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Is this service free to use?</p>
          <p className="text-sm md:text-xl font-normal mt-4">
            Yes, the core functionality of the platform is completely free for all users.
            Our mission is to make learning and knowledge-sharing accessible to everyone.
          </p>
        </div>
      ),
    },
    {
      title: "How?",
      value: "content",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>How do I get started?</p>
          <p className="text-sm md:text-xl font-normal mt-4">
            Simply sign up for an account, browse through questions or topics that interest
            you, and start engaging—whether by asking questions, responding, or exploring
            existing threads.
          </p>
        </div>
      ),
    },
    {
      title: "What?",
      value: "random",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>What makes this platform unique?</p>
          <p className="text-sm md:text-xl font-normal mt-4">
            What sets this platform apart is its vibrant and inclusive community, user-friendly
            interface, and a commitment to high-quality, well-curated content—making it not
            just a Q&A site, but a true hub for learning and discovery.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-40">
      <Tabs tabs={tabs} />
    </div>
  );
}
