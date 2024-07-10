import { MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced'

const ChatsPage =(props) =>{
    const chatProps = useMultiChatLogic(
        'ce8eaa5a-4538-42b2-b1c4-9ffe3c628882',
        props.user.username, 
        props.user.secret
    );
    return ( 
    <div style={{ height: '100vh' }}>
        <MultiChatSocket {...chatProps} />
        <MultiChatWindow {...chatProps} style={{ height: '100%'}} />
    </div>
    )
}

export default ChatsPage