export default function TailButton({caption,color, handleClick}) {
    const colorObj= {
        'blue': 'bg-blue-300',
        'green': 'bg-green-300',
        'red': 'bg-red-300'
    }
    const hoverObj={
        'blue': 'hover:bg-blue-500',
        'green': 'hover:bg-green-500',
        'red': 'hover:bg-red-500'
    }
    const bColor=`p-2 rounded-md ${colorObj[color]} ${hoverObj[color]} text-white m-2`;
    return (
        <button className={bColor}
        onClick={handleClick}>
        {caption}
        </button>
    )
}
