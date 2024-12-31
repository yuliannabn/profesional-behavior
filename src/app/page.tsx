import Image from 'next/legacy/image';
import AppBar from '@/components/AppBar'
import List from '@/components/List'
import topics from '@/utils/topics'

const Home = () => {
    return (
        <>
            <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
                <AppBar title={'PROFESSIONAL BEHAVIOR'} sections={['introduction', 'topics']}/>
                <main className="flex flex-col pt-32 gap-16 row-start-2 items-center w-full max-w-6xl">
					<Image
						src="/suitcase.svg"
						alt="Suitcase"
						width={200}
						height={200}
						priority
						className="w-full h-auto rounded-lg mb-8"
					/>
                    <section id="introduction" className="flex flex-col gap-8 items-center max-w-2xl">
                        <h1 className="text-4xl font-bold text-center tracking-[.25rem] font-mono">Welcome to Professional Behavior!</h1>
                        <p className="text-lg text-center">A small website discussing topics about professional behavior.</p>
                        <p className="text-md text-center text-gray-600">
                            Contains insights on the significance of our behavior, values and responsibility in the workplace.
                        </p>
                    </section>

                    <section id="topics">
                    <List title={'Topics'} items={topics}/>
                    </section>
                </main>
                <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
                    <a className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                        href="https://github.com/yuliannabn/profesional-behavior"
                        target="_blank"
                        rel="noopener noreferrer">
                        <Image aria-hidden src="/globe.svg" alt="Globe icon" width={16} height={16} />
                        yuliannabn
                    </a>
                </footer>
            </div>
        </>
    );
}

export default Home;
