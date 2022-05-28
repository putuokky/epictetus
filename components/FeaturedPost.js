import Link from 'next/link';
import InfoPost from '@components/InfoPost';
import Image from "next/image";

export default function FeaturedPost(props) {
  console.log(props.data[0].attributes.publishedAt);
  return (
    <article>
      <div className="flex -mx-4 lg:items-center items-start flex-wrap">
        <div className="px-4 lg:w-8/12 md:w-7/12 w-full">
          <Link href="/detail">
            <a>
              <img src={props.data[0].attributes.thumbnail.data.attributes.name} className="rounded-xl w-full mb-4 md:mb-0" />
              {/* <Image src="/featured-thumbnail.png" className='rounded-xl w-full mb-4 md:mb-0' /> */}
            </a>
          </Link>
        </div>
        <div className="lg:w-4/12 md:w-5/12 w-full px-4">
          <InfoPost
            category={props.data[0].attributes.category.data.attributes.name}
            date={props.data[0].attributes.publishedAt}
            title={props.data[0].attributes.title}
            shortDescription={props.data[0].attributes.headline}
            authorAvatar={props.data[0].attributes.author.data.attributes.avatar.data.attributes.name}
            authorName={props.data[0].attributes.author.data.attributes.name}
            authorJob={props.data[0].attributes.author.data.attributes.job}
          />
        </div>
      </div>
      <hr className="border-white/10 mt-10 md:hidden" />
    </article>
  );
}
