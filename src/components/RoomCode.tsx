import copyImg from '../assets/copy.svg';

import {RoomCodeButton} from '../styles/room-code';

type RoomCodeProps = {
  code: string;
}

export function RoomCode(props: RoomCodeProps) {

  function copyRoomCodeToClipBoard(){
    navigator.clipboard.writeText(props.code)
  }

  return (
    <RoomCodeButton className="room-code" onClick={copyRoomCodeToClipBoard}>
      <div>
        <img src={copyImg} alt="Copie o codigo da sala" />
      </div>
      <span>Sala <strong>{props.code}</strong></span>
    </RoomCodeButton>
  )
}