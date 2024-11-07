const Chat = () => {
  return (
    <div className="grid grid-cols-6 gap-2 grid-flow-col p-3">
      <div className="col-span-2 bg-green-100 shadow-lg p-4 rounded-lg ">
        <div className="flex gap-3 items-center bg-green-300 cursor-pointer p-3 rounded-lg hover:bg-green-500">
          <img className="flex-initial w-12 h-12 bg-red-900 rounded-full" src="/in-app-chat-blog-cover-image.png" alt="" />
          <h1  className="font-serif">Client 1</h1>
        </div>
      </div>
      <div className="p-6 col-span-4 w-100  bg-green-200 shadow-md rounded-md">
        <h2 className="text-lg font-semibold mb-4">Chat Room</h2>

        {/* Chat window */}
        <div className="h-96 p-4 overflow-y-auto bg-white rounded-lg"></div>

        {/* Input area */}
        <div className="mt-4 flex gap-2">
          <input
            type="text"
            placeholder="Type a message"
            className="flex-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
