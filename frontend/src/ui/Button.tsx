type Variant = "primary" | "secondary" | "tertiary"

interface Props {
    children?: React.ReactNode
    variant?: Variant
}

export default function Button({ children, variant = "primary" }: Props) {
    const variantClassName = {
        primary: "",
        secondary: "",
        tertiary:
            "border border-solid border-gray-300 hover:shadow-lg hover:border-gray-200",
    }

    return (
        <button
            className={
                "p-[0.3rem_1rem] rounded-lg flex items-center gap-x-2 hover:cursor-pointer hover:scale-105 transition " +
                variantClassName[variant as Variant]
            }
        >
            {children}
        </button>
    )
}
