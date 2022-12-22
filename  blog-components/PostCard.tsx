import * as React from "react";
import { PostCardProps } from "../types";
import moment from 'moment'
import { Link } from "gatsby-link";

const PostCard: React.FC<PostCardProps> = ({ title, author, date, permalink, excerpt }) => {
  return (
    <article className={`relative bg-white dark:bg-gray-800 rounded shadow h-auto p-4 flex flex-col justify-between items-start`}>
      <h3 className="font-bold text-xl mb-2">{title}</h3>
      <div className="flex flex-col flex-nowrap justify-start items-start mb-4">
        <div className="mr-1 font-normal">
          Written by{" "}
          <span className="text-primary font-semibold">
            {author}
          </span>
        </div>
        {` `}
        <div className="mr-1 font-normal">
          Published on{" "}
          <span className="text-primary font-semibold">
            <time dateTime={date}>
              {moment(date).format("MMMM DD, YYYY")}
            </time>
          </span>
        </div>
      </div>
      <p className="font-light text-sm leading-8">{excerpt}</p>
      <Link
        to={permalink}
        className="bg-primary-light hover:bg-primary text-white py-2 px-3 text-lg font-semibold uppercase rounded-sm mt-4"
      >
        Read More
      </Link>
    </article>
  );
};

export default PostCard