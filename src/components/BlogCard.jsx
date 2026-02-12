

const BlogCard = ({img, title,comment, data}) => {
  return (
    <div className='space-y-4'>
        <img 
        className='rounded-lg hover:scale-105 transition-transform'
        src={img}
        alt='post'
        />
        <div className='text-green-500 font-medium'>
            <span>{data}</span>
             <span>{comment} Comments</span>

        </div>
    <h3 className='font-bold text-xl'>{title}</h3>
    </div>
  )
}

export default BlogCard