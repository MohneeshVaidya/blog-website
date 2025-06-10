interface Props {
    children: React.ReactNode
}

export default function Section({ children }: Props) {
    return (
        <section>
            <div className="w-[90%] max-w-6xl mx-auto mt-24">{children}</div>
        </section>
    )
}
