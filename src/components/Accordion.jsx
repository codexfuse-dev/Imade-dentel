import { useState } from 'react'

export default function Accordion({ items }) {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="process-accordion accordion-container">
      {items.map((item, i) => (
        <div key={i} className={`accordion-item${activeIndex === i ? ' active' : ''}`}>
          <div className="accordion-header" onClick={() => setActiveIndex(activeIndex === i ? -1 : i)}>
            <h3 className="accordion-title">
              <span className="accordion-number">{String(i + 1).padStart(2, '0')}</span>
              {item.title}
            </h3>
            <span className="accordion-icon"></span>
          </div>
          <div className="accordion-content" style={{ maxHeight: activeIndex === i ? '500px' : '0' }}>
            <p>{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
