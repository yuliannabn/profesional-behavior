import TopicPage from '@/components/TopicPage'

const DevelopmentPage = () => {
    const topicIdx = 3;
    const imagePath = "/development.svg";

    return (
        <>
            <TopicPage
                topicIdx = {topicIdx}
                title={'Development of Soft Skills'}
                imagePath={imagePath}
            />
        </>
    )
}

export default DevelopmentPage;
