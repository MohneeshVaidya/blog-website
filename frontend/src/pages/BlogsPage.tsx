import { Section } from "../ui"

export default function BlogsPage() {
    const blogs = []

    return (
        <Section>
            <div className="min-h-[calc(100vh-11.6rem)] relative">
                <h1 className="heading-primary">my blogs</h1>
                {blogs.length === 0 ? (
                    <h3 className="text-lg text-gray-600 font-bold mt-12">
                        currently there are no blogs...
                    </h3>
                ) : null}
            </div>
        </Section>
    )
}
