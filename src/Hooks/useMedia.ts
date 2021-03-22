import React from 'react'

function useMedia(media: string) {
    const [match, setMetch] = React.useState(null);

    React.useEffect(() => {
        
        function changeMetch() {
            const { matches } = window.matchMedia(media);
            setMetch(matches);
        }
        changeMetch();
        window.addEventListener('resize', changeMetch);

        return () => {
            window.removeEventListener('resize', changeMetch)
        }
    } , [media])

    return match;
}

export default useMedia
