import type { NextPage } from "next";
import Image from "next/image";
import { motion } from "framer-motion";
import AdvantageWidget from "../components/AdvantageWidget";
import GithubRespositoryWidget, {
  Seperator,
} from "../components/GithubRespositoryWidget";
import { Client } from "twitter-api-sdk";
import { Tweet } from 'react-twitter-widgets';
import { useState } from "react";

export type GithubRepository = {
  node: { name: string; description: string; url: string };
};

type TwitterTweet = {
  edit_history_tweet_ids: string[];
  id: string;
  text: string;
}

type PageProps = {
  githubRepositories: GithubRepository[] | null,
  twitterTweets: TwitterTweet[] | null
};

const Hero = () => {
  return (
    <section className='flex flex-col md:items-center mb-16 pt-24 bg-[url("/low-poly-grid.svg")] bg-cover bg-no-repeat md:flex-row items-end'>
      <motion.div
        className="w-full flex justify-center p-4"
        initial={{ scale: 0, rotate: 180 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        <h1>
          <text className="text-5xl md:text-7xl">Hi, I{"'"}m Michael! 👋</text>
          <br />
          <br />
          <text className="text-3xl md:text-5xl">
            A Professional Web Developer
          </text>
        </h1>
      </motion.div>
      <div className="w-[400px] md:w-[800px] aspect-[1.21] relative">
        <Image
          src="/hero.webp"
          alt="Michael Pfister working on a laptop"
          layout="fill"
        />
      </div>
    </section>
  );
};

const MyAdvantages = () => {
  return (
    <section className="flex justify-evenly my-16" id="my_advantage">
      <motion.div
        className="w-[500px] aspect-[1233/929] hidden lg:inline-block relative"
        initial={{ x: -10 }}
        animate={{ x: 20 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
          duration: 2,
        }}
      >
        <Image src="/Rocket Boy.svg" alt="Rocket" layout="fill" />
      </motion.div>
      <div className="flex flex-col gap-8 items-center">
        <h1 className="text-3xl">My Advantage</h1>
        <div className="flex flex-wrap justify-center items-center gap-4">
          <AdvantageWidget
            imageSource="/programming_experience.svg"
            heading="Programming Experience"
            description="Over 6 years of programming experience."
            data-aos="fade-right"
          />
          <AdvantageWidget
            imageSource="/Team_Lineal-coloured.svg"
            heading="Active Team Player"
            description="Collaboration in open source projects."
            data-aos="fade-up"
          />
          <AdvantageWidget
            imageSource="/Online Learning_Flat.svg"
            heading="Super Fast Learner"
            description="Highly adaptive to new technologies."
            data-aos="fade-left"
          />
        </div>
      </div>
    </section>
  );
};

const LatestProjects = ({
  githubRepositories,
}: {
  githubRepositories: GithubRepository[];
}) => {
  return (
    <section className="my-16 bg-[#2a2a2a]" id="projects">
      <div
        className="w-full h-16 sm:h-28 md:h-36 lg:h-52 xl:h-64 bg-[url('/layered-waves-haikei.svg')] bg-cover bg-bottom"
        aria-hidden="true"
      />
      <div className="flex justify-evenly items-center">
        <div>
          <h1 className="text-3xl p-4">Latest Projects</h1>
          <div className="p-4">
            <Seperator />
            {githubRepositories.map((githubRepository, index) => (
              <div key={`github_repository_${index}`}>
                <GithubRespositoryWidget githubRepository={githubRepository} />
                <Seperator />
              </div>
            ))}
          </div>
        </div>
        <div className="relative w-[500px] xl:w-[800px] aspect-[406/306] hidden md:inline-block">
          <Image
            src="/World wide web_Flatline.svg"
            alt="A globe representing the world wide web"
            layout="fill"
          />
        </div>
      </div>
      <div
        className="w-full h-16 sm:h-28 md:h-36 lg:h-52 xl:h-64 bg-[url('/layered-waves-haikei.svg')] bg-cover bg-bottom rotate-180"
        aria-hidden="true"
      />
    </section>
  );
};

const TwitterFeed = ({ tweets }: { tweets: TwitterTweet[] }) => {
  return <section className="my-8 px-4" id='twitter_feed'>
    <h1 className="text-4xl w-full text-center mb-8">Tweets</h1>
    <div className="flex flex-wrap gap-x-5 justify-center items-center">
      {tweets.map(({id}, index)=><div key={`twitter_tweet_${id}`} className={`${index>1 && 'hidden sm:inline-block'}`} data-aos="flip-left"><Tweet tweetId={id} options={{ width: "300" }} /></div>)}
    </div>
  </section>
}

const ContactMe = () => {
  return <section className=" bg-orange" id="contact_me">
    <div className="w-full h-16 sm:h-28 md:h-36 lg:h-52 xl:h-72 bg-[url('/wave-haikei.svg')] bg-cover bg-bottom" aria-hidden="true"/>
    <div className="p-4 flex justify-center items-center flex-col sm:flex-row gap-4">
      <div className="flex flex-col items-center" data-aos="fade-right">
        <h1 className="text-3xl mb-4">Contact Me</h1>
        <div className="relative w-64 md:w-96 lg:w-[500px] aspect-[406/306] hidden sm:inline-block">
          <Image src="/Sending emails_Flatline.svg" alt="Contact me" layout="fill" />
        </div>
      </div>
      <form className="flex flex-col gap-4 w-64 md:w-[500px]" data-aos="fade-left" action="https://formsubmit.co/8b0ed63f53eab46acdfa37976cb768dc" method="POST">
        <input type="text" name="name" placeholder="Full Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required />
        <div className="flex justify-center">
          <button className="bg-[#000] w-2/3" type="submit">Send</button>
        </div>
      </form>
    </div>
  </section>
};

const Home: NextPage<PageProps> = ({ githubRepositories, twitterTweets }) => {
  return (
    <>
      <Hero />
      <MyAdvantages />
      {githubRepositories && <LatestProjects githubRepositories={githubRepositories} />}
      {twitterTweets && <TwitterFeed tweets={twitterTweets} />}
      <ContactMe />
    </>
  );

};

export const getServerSideProps = async () => {
  require("dotenv").config();

  const githubRepositories = await (
    await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `token ${process.env.GITHUB_AUTH}`,
      },
      body: JSON.stringify({
        query: `{
      user(login: "michael-pfister") {
        repositories(first: 5, orderBy: {field: CREATED_AT, direction: DESC}) {
          edges {
            node {
              name
              description
              url
            }
          }
        }
      }
    }`,
      }),
    })
  ).json();

  const twitterTweets = process.env.TWITTER_BEARER_TOKEN
    ? await new Client(process.env.TWITTER_BEARER_TOKEN).tweets.usersIdTweets(
        "1557407973928013824",
        { exclude: ["replies"], max_results: 5 }
      )
    : null;

  return {
    props: {
      githubRepositories: githubRepositories.data
        ? githubRepositories.data.user.repositories.edges
        : null,
      twitterTweets: twitterTweets ? (twitterTweets.data ? twitterTweets.data.slice(0, 3) : null) : null,
    },
  };
};

export default Home;
