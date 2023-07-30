import { BlogPost } from "@/lib/posts";
import getFormattedDate from "@/lib/getFormatteddate";
import Link from "next/link";
import Image from "next/image";

const PostItem = ({ id, title, date, image, description }: BlogPost) => {
  const formattedDate = getFormattedDate(date);

  return (
    <li className="hover:translate-y-[-5px] duration-100 transition-all ease-in">
      <div className="flex flex-col shadow-2xl rounded-xl overflow-hidden mb-8">
        <Image src={`${image}`} width={400} height={400} alt={title} />
        <div className="flex flex-col gap-4 pt-4 p-5 bg-textColor text-background">
          <Link href={`/blog/${id}`}>
            <h3 className="text-md font-bold uppercase hover:text-red-500 transition-all duration-75">
              {title}
            </h3>
          </Link>
          <small className="text-dark text-xs">{formattedDate}</small>
          <p className="text-sm">{description}</p>
          <Link
            className="bg-primary p-2 text-center rounded-md hover:bg-red-500 transition-all duration-75 tracking-wider"
            href={`/blog/${id}`}
          >
            Read more &rarr;
          </Link>
        </div>
      </div>
    </li>
  );
};

export default PostItem;
