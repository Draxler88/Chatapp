import Users from "./users/Users";

const Chat = () => {

  return (
    <div className="grid grid-cols-6 gap-2 grid-flow-col p-3">
      <Users />
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
