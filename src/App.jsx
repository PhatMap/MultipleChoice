import { useState } from 'react'
import Answer from './Answer'

function App() {
  const amount = []
  for (let i = 0; i < 10; i++) {
    amount.push(i)
  }
  

  return (
    <div className="container">
      <div>
        {amount.map((item) => (
          <Answer key={item} label={item + 101} />
        ))}
      </div>
      <div>
        {amount.map((item) => (
          <Answer key={item} label={item + 111} />
        ))}
      </div>
      <div>
        {amount.map((item) => (
          <Answer key={item} label={item + 121} />
        ))}
      </div>
      <div>
        {amount.map((item) => (
          <Answer key={item} label={item + 131} />
        ))}
      </div>
      <div>
        {amount.map((item) => (
          <Answer key={item} label={item + 141} />
        ))}
      </div>

      <div>
        {amount.map((item) => (
          <Answer key={item} label={item + 151} />
        ))}
      </div>
      <div>
        {amount.map((item) => (
          <Answer key={item} label={item + 161} />
        ))}
      </div>
      <div>
        {amount.map((item) => (
          <Answer key={item} label={item + 171} />
        ))}
      </div>
      <div>
        {amount.map((item) => (
          <Answer key={item} label={item + 181} />
        ))}
      </div>
      <div>
        {amount.map((item) => (
          <Answer key={item} label={item + 191} />
        ))}
      </div>

    </div>
  );
}

export default App
