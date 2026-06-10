import { useState, useEffect, createContext, useContext, useCallback } from 'react'

const LightboxContext = createContext(null)

export function useLightbox() {
  return useContext(LightboxContext)
}

export function LightboxProvider({ children }) {
  const [state, setState] = useState({ open: false, images: [], index: 0, isVideo: false, videoUrl: '' })

  const openImage = useCallback((images, index = 0) => {
    setState({ open: true, images, index, isVideo: false, videoUrl: '' })
    document.body.style.overflow = 'hidden'
  }, [])

  const openVideo = useCallback((url) => {
    setState({ open: true, images: [], index: 0, isVideo: true, videoUrl: url })
    document.body.style.overflow = 'hidden'
  }, [])

  const close = useCallback(() => {
    setState(s => ({ ...s, open: false, isVideo: false }))
    document.body.style.overflow = 'auto'
  }, [])

  const next = useCallback(() => setState(s => ({ ...s, index: (s.index + 1) % s.images.length })), [])
  const prev = useCallback(() => setState(s => ({ ...s, index: (s.index - 1 + s.images.length) % s.images.length })), [])

  return (
    <LightboxContext.Provider value={{ openImage, openVideo, close }}>
      {children}
      {state.open && (
        <div className="lightbox-modal active" onClick={(e) => e.target === e.currentTarget && close()}>
          <span className="lightbox-close" onClick={close}>
            <svg viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></svg>
          </span>
          {!state.isVideo && state.images.length > 1 && (
            <>
              <span className="lightbox-nav lightbox-prev" onClick={prev}>
                <svg viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" /></svg>
              </span>
              <span className="lightbox-nav lightbox-next" onClick={next}>
                <svg viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" /></svg>
              </span>
            </>
          )}
          <div className="lightbox-content">
            {state.isVideo ? (
              <iframe className="video-lightbox-iframe"
                src={`${state.videoUrl}?autoplay=1`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen title="Clinic Video" />
            ) : (
              <>
                <img className="lightbox-img" src={state.images[state.index]?.src} alt={state.images[state.index]?.caption || ''} />
                {state.images[state.index]?.caption && (
                  <div className="lightbox-caption">{state.images[state.index].caption}</div>
                )}
              </>
            )}
          </div>
        </div>
      )}
    </LightboxContext.Provider>
  )
}

// Standalone wrapper so App.jsx can simply render <Lightbox />
export default function Lightbox() {
  return null // Provider wraps the app; this is a placeholder
}
