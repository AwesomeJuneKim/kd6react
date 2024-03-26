export default function TailButton({caption,color, handleClick}) {
    const colorObj= {
        'blue': 'bg-blue-400',
        'green': 'bg-[#B2BEB5]',
        'red': 'bg-red-400',
        'gray': 'bg-[#C0C0C0]'
    }
    const hoverObj={
        'blue': 'hover:bg-blue-500',
        'green': 'hover:bg-green-500',
        'red': 'hover:bg-red-500',
        'gray': 'hover:bg-[#848482]'
    }
    const bColor=`p-2 rounded-md ${colorObj[color]} ${hoverObj[color]} text-white m-2`;
    return (
        <button className={bColor}
        onClick={handleClick}>
        {caption}
        </button>
    )
}
