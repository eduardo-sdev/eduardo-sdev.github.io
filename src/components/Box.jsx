export const Box = ({children, title}) => {
    return (
        <div className="p-5 rounded-3xl w-full bg-[#302F3D]">
            {title && (
                <h2
                    className="text-xl font-bold"
                >{title}</h2>
            )}
            {children}
        </div>
    )
}

