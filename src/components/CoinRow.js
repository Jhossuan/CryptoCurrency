import React from 'react'

const CoinRow = ({coin, index}) => {
  return (
    <tr>
      <td>{index}</td>
      <td>
        <img src={coin.image} alt={coin.name} style={{width: '1.5rem'}} className='img-fluid me-4'/>
        <span>{coin.name}</span>
        <span className='text-muted text-uppercase'> {coin.symbol}</span>
        </td>
      <td><span className='text-muted'>USD</span>{coin.current_price}</td>
      <td className={coin.price_change_percentage_24h > 0 ? 'text-success' : 'text-danger'}>
        {coin.price_change_percentage_24h}
      </td>
      <td>{coin.total_volume}</td>
    </tr>
  )
}

export default CoinRow