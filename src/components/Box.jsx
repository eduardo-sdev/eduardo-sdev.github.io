export const Box = ({children, title}) => {
    return (
        <div className="p-3 rounded-xl w-full bg-[#302F3D] shadow-lg">
            {title && (
                <h2
                    className="text-xl font-bold"
                >{title}</h2>
            )}
            {children}
        </div>
    )
}

