import matter from 'gray-matter'
import { marked } from 'marked'
import { readFileSync } from 'fs'
import { join } from 'path'

const getMarkdownContent = (filename: string) => {
    const filePath = join(process.cwd(), 'src/content', `${filename}.md`)
    const fileContent = readFileSync(filePath, 'utf8')
    const { data, content } = matter(fileContent)
    const htmlContent = marked(content)
    return { metadata: data, content: htmlContent }
}

export default getMarkdownContent;
