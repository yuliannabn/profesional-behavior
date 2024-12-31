import AppBar from '@/components/AppBar'
import topics from '@/utils/topics'
import List from '@/components/List'
import Image from 'next/image'
import getMarkdownContent from '@/utils/markdown'

interface TopicPageProps {
    topicIdx: number;
    title: string;
    imagePath: string;
}

const TopicPage = ({
    topicIdx,
    title,
    imagePath
}: TopicPageProps) => {


    return (
        <>
        <div className="flex grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-12 gap-16 sm:p-20">
            <AppBar title={'PROFESSIONAL BEHAVIOR'} sections={['contents', 'topics']}/>
            <main className="flex flex-col pt-12 gap-16 row-start-2 items-center w-full max-w-6xl">
            <Image
                src={imagePath}
                alt={title}
                width={50}
                height={50}
                priority
                className="w-[30vw] h-[30vh] rounded-lg mb-8"
            />
            <section id="contents" className="flex flex-col gap-8 items-center max-w-2xl">
            <h1 className="text-4xl font-bold underline text-center tracking-[.25rem] font-mono">{title}</h1>
            <p className="text-lg text-center text-gray-600">{topics[topicIdx].description}</p>
            <article className="prose prose-lg text-center prose-slate w-[75vw] border-2 border-gray-200 rounded-lg p-8">
                <div
                    dangerouslySetInnerHTML={{
                        __html: getMarkdownContent(topics[topicIdx].link.slice(1)).content
                    }}
                />
            </article>
            </section>
            <section id="topics">
            <List title={'Topics'} items={topics.filter((_, i) => (i !== topicIdx))}/>
            </section>

        </main>
        </div>
        </>
    )
}

export default TopicPage;
