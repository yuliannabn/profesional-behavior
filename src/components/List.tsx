import Image from 'next/image'
import Link from 'next/link'

interface ListItem {
    link: string;
    label: string;
    alt: string;
    description: string;
}

interface ListProps {
    title: string;
    items: ListItem[];
}

const List = ({title, items}: ListProps) => {
    return (
        <div>
			<h1 className="text-4xl font-bold pt-32 text-center content-center underline tracking-[.25rem] mb-10 font-mono">{title}</h1>

            {items.map((item: ListItem, index: number) => (
            <div key={index} className="flex flex-col md:flex-row items-center start-center content-center text-center gap-6 p-6 hover:bg-gray-100 rounded-lg transition-colors">
                <div className="p-6 rounded-full bg-gray-100">
                <Image
                    src={item.link + '.svg'}
                    alt={item.alt}
                    width={64}
                    height={64}
                />
                </div>
                    <Link href={item.link} className="flex flex-col p-5 gap-5 items-center justify-center md:items-start text-center">
                    <h2 className="text-xl underline font-semibold">{item.label}</h2>
                        {item.description}
                    </Link>
            </div>
            ))}
        </div>
    )
}

export default List;
