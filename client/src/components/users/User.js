const User = ({key, name, image}) => {
    return(
        <div className="flex gap-3 items-center bg-green-300 my-2 cursor-pointer p-3 rounded-lg hover:bg-green-500">
          <img className="flex-initial w-12 h-12 bg-red-900 rounded-full" src="/in-app-chat-blog-cover-image.png " alt="" />
          <h1 className="font-serif">{name}</h1>
        </div>
    )
}

export default User;