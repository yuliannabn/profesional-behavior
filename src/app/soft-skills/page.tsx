import TopicPage from '@/components/TopicPage'

const SoftSkillsPage = () => {
    const topicIdx = 2;
    const imagePath = "/soft-skills.svg";

    return (
        <>
            <TopicPage
                topicIdx = {topicIdx}
                title={'Soft Skills'}
                imagePath={imagePath}
            />
        </>
    )
}

export default SoftSkillsPage;
