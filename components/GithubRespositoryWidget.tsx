import Image from "next/image";
import { GithubRepository } from "../pages";

export const Seperator = () => {
  return <div className="w-1 h-6 border-blue border-l" data-aos="fade-right"/>;
};

const GithubRespositoryWidget = ({
  githubRepository: {
    node: { name, description, url },
  },
}: {
  githubRepository: GithubRepository;
}) => {
  return (
    <div data-aos="fade-right" data-cy='github repository'>
      <a className="cursor-pointer" href={url} target="_blank" rel="noreferrer">
        <div className="flex gap-2 px-2 items-center">
          <div className="relative w-6 h-6">
            <Image
              className="invert"
              src="/github-svgrepo-com.svg"
              alt="github logo"
              layout="fill"
            />
          </div>
          <h1 className="text-xl text-blue">{name}</h1>
        </div>
        {description && <p className="text-grey p-2">{description}</p>}
      </a>
    </div>
  );
};

export default GithubRespositoryWidget;
