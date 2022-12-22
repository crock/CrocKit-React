import * as React from "react";
import { PostCardProps } from "../types";
import moment from 'moment'
import { Link } from "gatsby-link";

const PostCard: React.FC<PostCardProps> = ({ title, author, date, permalink, excerpt, categories, tags }) => {

  const primaryCategory = categories && categories.length ? categories[0] : 'Uncategorized';

  const TagsDisplay = () => {
    if (tags && tags.length) {
      return (
        <div className="flex flex-wrap -mx-1.5 mt-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="mt-2 px-1.5 py-0.5 mr-1 rounded-full text-xs font-medium text-gray-700 bg-gray-100 hover:bg-gray-200"
            >
              #{tag}
            </span>
          ))}
        </div>
      );
    }
    return null;
  }

  const ExcerptDisplay = () => {
    const excerptText = excerpt
      .replace(/<a.*?>(.*?)<\/a>/g, '$1')
      .replace('Continue reading', '')
      .replace(`"${title}"`, '...')

    return (
      <div className="font-light text-sm leading-8" dangerouslySetInnerHTML={{__html: excerptText}} />
    )
  }

  return (
    <article className={`relative bg-white dark:bg-gray-800 rounded shadow h-auto p-4 flex flex-col justify-between items-start`}>
      <span className="p-2 uppercase bg-gray-300 text-white font-semibold text-xs rounded-sm mb-2">
        {primaryCategory}
      </span>
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
      <ExcerptDisplay />
      <Link
        to={permalink}
        className="bg-primary-light hover:bg-primary text-white py-2 px-3 text-lg font-semibold uppercase rounded-sm mt-4"
      >
        Read More
      </Link>
      <TagsDisplay />
    </article>
  );
};

export default PostCard