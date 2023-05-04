// Utilizando la interfaz que nos ofrece 'https://www.npmjs.com/package/react-chat-engine-advanced'
// import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'

//Utilizando la inferfaz que nos ofrece 'https://www.npmjs.com/package/react-chat-engine-pretty'
import { PrettyChatWindow } from 'react-chat-engine-pretty'
import PropTypes from 'prop-types';

const ChatsPage = (props) => {
    // const chatProps = useMultiChatLogic('aca69fca-9610-46b0-9d00-ae2fbec1a47c', props.user.username, props.user.secret)
    return <div style={{ height: '100vh' }}>
        <PrettyChatWindow
            projectId="aca69fca-9610-46b0-9d00-ae2fbec1a47c"
            username={props.user.username}
            secret={props.user.secret}
            style={{ height: '100%' }}
        />
    </div>
}

ChatsPage.propTypes = {
    user: PropTypes.shape({
        username: PropTypes.string.isRequired,
        secret: PropTypes.string.isRequired,
    }).isRequired,
};

export default ChatsPage