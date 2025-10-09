import './Set.css'

function Set({ player1, player2 }: { player1: string; player2: string;}) {
  return (
    <div className='bracket-set'>
      <div className='p1-name'>{player1}</div>
      <div className='p1-score'>0</div>
      <div className='p2-name'>{player2}</div>
      <div className='p2-score'>0</div>
    </div>
  )
}

export default Set