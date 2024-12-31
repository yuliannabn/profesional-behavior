import TopicPage from '@/components/TopicPage'

const ErrorPage = () => {
    const topicIdx = 1;
    const imagePath = "/error.svg";

    return (
        <>
            <TopicPage
                topicIdx = {topicIdx}
                title={'How to manage our errors'}
                imagePath={imagePath}
            />
        </>
    )
}

export default ErrorPage;
