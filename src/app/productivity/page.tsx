import TopicPage from '@/components/TopicPage'

const ProductivityPage = () => {
    const topicIdx = 4;
    const imagePath = "/productivity.svg";

    return (
        <>
            <TopicPage
                topicIdx = {topicIdx}
                title={'Link between behavior and productivity'}
                imagePath={imagePath}
            />
        </>
    )
}

export default ProductivityPage;
