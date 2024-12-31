import TopicPage from '@/components/TopicPage'

const EthicsPage = () => {
    const topicIdx = 0;
    const imagePath = "/ethics.svg";

    return (
        <>
            <TopicPage
                topicIdx = {topicIdx}
                title={'Ethics'}
                imagePath={imagePath}
            />
        </>
    )
}

export default EthicsPage;
