import { MultiChatWindow, useMultiChatLogic, MultiChatSocket } from 'react-chat-engine-advanced';

//server
const projectId: string= '8b3a67eb-4cb0-460c-a908-131a5525135b'
const username: string = 'gopal'
const secret: string = 'abc123'


function App() {
  //Logic
  const chatProps = useMultiChatLogic(projectId, username, secret)
  return (
    <div>
      <MultiChatSocket {...chatProps} />
      {/* components */}
      <MultiChatWindow {...chatProps} style={{ height: '100vh' }} />
    </div>
  );
}

export default App;
