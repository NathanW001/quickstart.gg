import './Set.css'

function Set({ player1, player2, score1, score2, status }: { player1: string; player2: string; score1: number; score2: number; status: number;}) {
  return (
    <div className={"bracket-set status-" + String(status)}>
      <div className='p1-name'>{player1}</div>
      <div className='p1-score'>{score1}</div>
      <div className='p2-name'>{player2}</div>
      <div className='p2-score'>{score2}</div>
      <div className='quick-report'>r</div>
      <div className='quick-stream'>s</div>
    </div>
  )
}

export default Set